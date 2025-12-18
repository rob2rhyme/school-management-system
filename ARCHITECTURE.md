# Architecture (Target State)

This document describes the intended target architecture for evolving `school-management-system` from a single-tenant demo UI into a secure multi-tenant, multi-vertical SaaS that can power many school types (dojo, music school, language school, dance studio, acting academy, etc.) from one codebase.

## Current State (What’s In The Repo Today)

- **Framework/UI**: Next.js 15 (App Router), React 18, Tailwind CSS, shadcn/ui (Radix), lucide icons.
- **Routes/pages**: `app/` contains UI routes for `auth/*`, `dashboard`, `students`, `teachers`, `classes`, `subjects`, `attendance`, `results`, `fees`, `timetable`, `noticeboard`, `profile`, `settings`.
- **Data layer**: No database, no API routes, no server actions; most data appears mocked in components and `data/students.json`.
- **Domain assumptions**: K-12 oriented entities exist in `types/index.ts` (`Student`, `Teacher`, `Class`, `Subject`, `Exam`, etc.). These will need to become **vertical-agnostic**.
- **Build config notes**: `next.config.mjs` currently disables ESLint/TS build failures and sets `images.unoptimized=true` (prototype-friendly, not SaaS-ready).

## Target Architecture Goals

- **Multi-tenant isolation**: Strong tenant isolation by default; no cross-tenant reads/writes possible through mistakes.
- **Config-first verticals**: A single codebase where “school types” are selected via configuration (templates) rather than forked code.
- **Composable modules**: Attendance, billing, scheduling, messaging, reporting, etc. are independently enabled/disabled per tenant.
- **Security-first**: Least privilege, auditable actions, secure defaults, and compliance-friendly data handling.

## Tenancy Model (Recommended)

### Model: Single shared DB + Row-Level Security (RLS)

Recommended for balance of operational simplicity and strong isolation:

- **Database**: Postgres.
- **Tenant key**: `tenant_id` on all tenant-scoped tables.
- **Isolation**: Postgres RLS policies ensure queries can only access rows where `tenant_id = current_setting('app.tenant_id')::uuid`.
- **App context**: The application sets `app.tenant_id` (and `app.actor_id`, `app.role`, etc.) per request/transaction.

Why this over schema-per-tenant:
- Easier migrations and analytics across tenants (for platform owner).
- Strong isolation when RLS is implemented correctly and tested.
- Less operational overhead than schema-per-tenant at scale.

When to consider schema-per-tenant later:
- Large enterprise tenants needing strict physical isolation, different extensions, or heavy customization.

## Identity, Authentication, and Session Strategy

### Actors and identities

- A **User** is an identity that can access the platform (email/password, OAuth, SSO).
- A **Membership** ties a user to a tenant and defines roles/permissions.
- A user can belong to multiple tenants (consultants, multi-location owners).

### Auth options (choose one early)

- **Auth.js (NextAuth)**: fits Next.js App Router well, supports OAuth/credentials, and can be integrated with Postgres.
- **Clerk/WorkOS**: faster SSO and enterprise onboarding, but adds vendor coupling.

Target requirements:
- Sessions stored server-side (DB) or signed JWT with rotation; short-lived session tokens; refresh/rotation.
- Tenant selection support for multi-tenant users (“switch organization”).
- Invite flows (magic link + role assignment).

## Authorization Model (RBAC + ABAC)

### Layers

1. **Tenant boundary**: enforced at DB (RLS) + app layer.
2. **RBAC** (role-based): roles like `owner`, `admin`, `staff`, `instructor`, `student`, `guardian`, plus platform roles.
3. **ABAC** (attribute-based): optional constraints like “instructor can only edit sessions they teach”, “guardian can only see linked students”.

### Permission representation

- Permissions as stable identifiers: `students.read`, `billing.invoices.write`, `attendance.take`, `reports.view`.
- Role definitions stored in DB and customizable per tenant (with safe defaults from templates).

## Domain Model (Vertical-Agnostic)

The key to “multi-vertical” is treating K-12 concepts as a specialization of a more general model.

### Core entities (platform + tenant)

- `PlatformUser` (identity)
- `Tenant` (organization/account) + `TenantPlan` (platform billing)
- `Membership` (user ↔ tenant) + `Role` + `Permission`
- `Location` (tenant can have multiple)

### People

- `Person` (name, contact methods) — may map to a user or be “unclaimed”
- `StudentProfile` (a person in a learner role for a tenant)
- `GuardianProfile` (a person linked to students)
- `StaffProfile` / `InstructorProfile` (can teach, manage)

### Programs and teaching structure

- `Program` (e.g., “Beginner Taekwondo”, “Piano Level 1”, “CEFR A2 English”, “Teen Acting Workshop”)
- `ProgramTrack` (optional grouping/track within program)
- `LevelDefinition` (belt/grade/level/term concept; supports ordering + metadata)
- `Term` (optional: season/semester/session; tenant-defined)
- `ClassGroup` (cohort or class container; not necessarily “Grade 10-A”)
- `Session` (scheduled class instance: date/time, location, instructor(s))
- `Enrollment` (student ↔ program/class/term; status transitions)
- `AttendanceRecord` (student ↔ session presence + notes)

### Assessments and progress

- `AssessmentDefinition` (test rubric, grading scheme)
- `AssessmentResult` (student attempt/outcome)
- `ProgressRecord` (student level/belt advancement)

### Billing (two billing planes)

1. **Platform billing** (B2B SaaS): tenant subscription to the platform.
   - `TenantSubscription`, `Plan`, `Invoice`, `Payment`, `Trial`, `MeteredUsage`
2. **Tenant billing** (B2C): billing students/guardians for classes/memberships.
   - `CustomerAccount` (guardian/student), `MembershipPlan`, `StudentSubscription`, `Invoice`, `Payment`, `Discount`, `Refund`

Keep these planes separate in code and data to avoid conflating who pays whom.

### Communications & automations

- `Announcement` (tenant-scoped)
- `MessageTemplate` (email/SMS)
- `Notification` / `DeliveryAttempt`
- `AutomationRule` (e.g., “remind unpaid invoices”, “attendance reminder”)

### Configuration & extensibility

- `TenantModule` (feature flags per tenant)
- `TenantTerminology` (string overrides: “Dojo”, “Belt”, etc.)
- `CustomFieldDefinition` + `CustomFieldValue` (schema-driven per tenant + per entity type)

## Configuration System (Templates + Overrides)

### Vertical template selection (during onboarding)

Each template provides:
- Default modules enabled/disabled.
- Default terminology and labels.
- Default roles/permissions.
- Default program structures (optional starter programs/levels).
- Default reporting dashboards (which KPIs matter).

### Rules

- **Templates do not fork code**; they are mostly configuration records.
- **Vertical differences must be data-driven** (levels, terminology, workflows), not hardcoded conditions like `if (vertical === "martial_arts")`.
- Code should expose extension points: hooks, config registries, and UI composition.

## Application Architecture (Next.js)

### UI routing

- Public marketing + auth pages.
- Tenant-scoped app routes (recommended): `/{tenantSlug}/...` to make tenancy explicit.
  - Example: `/dojo-ryu/dashboard`, `/music-house/students`.

### Server layer

Preferred approach:
- **Server actions** for form workflows and simple mutations.
- **Route handlers** (`app/api/.../route.ts`) for integrations, webhooks, and external API consumers.
- A shared `services/` layer for domain logic, used by both server actions and route handlers.

### Data access

- Choose an ORM/query builder (Prisma or Drizzle) with explicit tenant scoping and tested RLS.
- Enforce tenant context at the lowest layer:
  - App sets DB session variables.
  - Queries do not accept raw tenant_id unless for platform admin tooling.

## Multi-tenant Operational Concerns

### Audit logs

Every meaningful mutation writes an append-only audit event:
- Who (actor), what (action), where (tenant/location), when, before/after references, request ID.
- Audit log should be queryable per tenant and exportable.

### Observability

- Structured logging with `tenant_id`, `actor_id`, `request_id`.
- Error tracking (Sentry or equivalent).
- Metrics for background jobs, billing events, notification deliveries.

### Background jobs

Needed for:
- Billing sync, invoice reminders, scheduled notifications, data exports.
- Use a queue (e.g., BullMQ/Redis, or managed queue) and separate worker runtime.

## Security & Compliance Baseline

- Tenant isolation: DB RLS + app-level scoping + testing.
- Least privilege: role-based UI gating is not enough; enforce on server/DB.
- Secrets management: environment variables; no secrets in client bundle.
- Data handling:
  - Data export (tenant and subject-access requests).
  - Data deletion/retention policies.
  - PII minimization and access logging.
- Webhooks/integrations: signed webhook verification and replay protection.

## Suggested Codebase Organization (Target)

Not to implement now; used to guide contributors:

```
app/
  (public)/...
  (tenant)/[tenant]/...
  api/...
modules/
  core/
  attendance/
  scheduling/
  billing-platform/
  billing-tenant/
  messaging/
  reporting/
services/
  auth/
  tenancy/
  billing/
  scheduling/
db/
  schema/
  migrations/
  rls/
configs/
  templates/
  permissions/
  terminology/
```


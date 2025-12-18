# Product Roadmap (Multi-Tenant, Multi-Vertical SaaS)

## Vision

Build a **multi-tenant, multi-vertical school operations SaaS** that can run any teaching business—karate/taekwondo dojo, music school, language school, dance school, acting school, tutoring center—on a single configurable platform.

The platform must be:
- **Config-first**: tenants choose a vertical template + toggle modules; minimal hardcoding.
- **Secure by default**: tenant isolation, least privilege, audit trails.
- **Extensible**: programs/levels/terms/terminology can model belts, grades, CEFR levels, dance grades, workshops, etc.

## Target User Roles

- **Platform Owner** (SaaS operator): manages plans, billing, support, tenant lifecycle, platform analytics.
- **School Owner/Admin** (tenant admin): configures tenant, manages staff, programs, pricing, settings.
- **Staff/Instructor**: manages sessions, attendance, student progress, limited admin operations.
- **Student/Parent/Guardian**: views schedule, attendance, progress, invoices; manages enrollments and payments (where enabled).

## Product Principles

1. **Tenant isolation is a feature**: multi-tenancy is enforced at the database + server layers, not just UI.
2. **One domain model, many verticals**: unify “class/lesson/workshop” and “belt/level/grade” via a general model.
3. **Modules are toggleable**: features like billing, messaging, attendance, reports can be enabled per tenant.
4. **Terminology is configurable**: “School” vs “Dojo”; “Belt” vs “Level”; “Instructor” vs “Teacher”.
5. **Two billing planes**: platform billing (tenant pays SaaS) is separate from tenant billing (students pay tenant).
6. **Auditability**: meaningful admin actions are logged and exportable.

## Phase 0 — Foundation (Repo + Standards)

### Objectives
- Establish contributor-friendly standards, testing baseline, and safe defaults.
- Prepare for secure multi-tenancy work (CI, lint, type checking, code organization).

### User stories
- As a contributor, I can run the project, tests, and lint reliably.
- As a platform owner, I can see basic operational logs and environment setup docs.

### Engineering deliverables
- Documentation: architecture/roadmap/milestones/glossary (this PR) + dev setup.
- CI: install/build/test; consistent package manager.
- Baseline linting/type-checking policy (remove “ignore build errors” in later phases).
- Add a clear `env.example` and secrets handling guidance.

### Non-goals
- No multi-tenant features yet.
- No database or billing yet.

### Acceptance criteria
- A new contributor can run the app locally using documented steps.
- CI produces deterministic results and fails on defined quality gates.

### Out of scope / later
- Multi-tenant routing and data isolation.

## Phase 1 — Multi-Tenancy + Auth + RBAC

### Objectives
- Introduce tenant concept and enforce isolation end-to-end.
- Implement authentication, tenant membership, and role-based authorization.

### User stories
- As a platform owner, I can create a tenant and invite a tenant admin.
- As a tenant admin, I can onboard (choose vertical template, set terminology, enable modules).
- As a user, I can switch between tenants I belong to.

### Engineering deliverables
- Tenancy model (recommended: Postgres + RLS with `tenant_id`).
- Auth (Auth.js/NextAuth or equivalent) with secure sessions.
- Membership + roles/permissions system.
- Tenant-scoped routing: `/{tenantSlug}/...` (recommended).
- Audit logging framework (at least for auth/admin events).

### Non-goals
- Full school operations (students/programs) can remain mocked until Phase 2.

### Acceptance criteria
- No cross-tenant access is possible via API/server actions (tested).
- A user can only see tenants they are a member of.
- Permissions gate admin actions; UI gating is backed by server checks.

### Out of scope / later
- Payments, messaging, advanced reporting.

## Phase 2 — Core School Operations (Vertical-Agnostic)

### Objectives
- Replace K-12-only concepts with vertical-agnostic core entities.
- Provide the minimum operational workflows for any teaching business.

### User stories
- As staff, I can create students/guardians and enroll them into programs/classes.
- As staff, I can create sessions and take attendance.
- As a student/guardian, I can view schedule and attendance history.

### Engineering deliverables
- Core entities: People, Programs, Levels, ClassGroups, Sessions, Enrollment, Attendance.
- Admin screens: students, staff, programs, schedule, attendance, announcements.
- Import/export basics (CSV) for students.
- Basic permissions by role (admin/instructor/guardian).

### Non-goals
- No billing required (unless a minimal stub is needed for later phases).

### Acceptance criteria
- A tenant can run basic operations end-to-end without hardcoding “grade/section”.
- Data model supports:
  - belt/level advancement (martial arts),
  - graded levels (music),
  - CEFR progression (language),
  - workshop-based programs (acting),
  - class series (dance).

### Out of scope / later
- Complex automations, payments, marketplace.

## Phase 3 — Payments and Subscriptions (SaaS + Tenant Billing)

### Objectives
- Monetize the SaaS (platform billing).
- Optionally enable student billing for tenants (tenant billing).

### User stories
- As a tenant admin, I can subscribe my tenant to a platform plan/trial.
- As a tenant admin, I can optionally charge students for memberships/classes.
- As a guardian, I can pay invoices and view receipts.

### Engineering deliverables
- Platform billing: plans, subscriptions, invoices, webhooks, trial handling.
- Tenant billing module: invoices, payments, discounts, refunds.
- Strict separation of billing planes in code and data.

### Non-goals
- No full accounting suite.

### Acceptance criteria
- Platform subscription state gates premium modules.
- Payments are idempotent; webhooks verified; audit logged.

## Phase 4 — Communications + Automations

### Objectives
- Reliable communications system for announcements and transactional notifications.
- Configurable automations per tenant.

### User stories
- As staff, I can send announcements to students/guardians.
- As a tenant admin, I can configure reminders (attendance, payments, schedule changes).

### Engineering deliverables
- Message templates, delivery tracking, opt-in/opt-out.
- Automation rules (scheduled jobs) with tenant-level settings.

### Non-goals
- Full CRM/marketing automation.

### Acceptance criteria
- Delivery is logged, rate-limited, and tenant-isolated.
- Automations can be enabled/disabled per tenant and per module.

## Phase 5 — Reporting + Admin + Audit

### Objectives
- Provide actionable insights and compliance-grade auditability.

### User stories
- As a tenant admin, I can see attendance and retention trends.
- As platform owner, I can monitor tenant health and subscription states.

### Engineering deliverables
- Reports for revenue (if billing enabled), attendance, retention, enrollment.
- Export system with access controls.
- Audit logs UI with filtering and export.

### Non-goals
- Complex BI / custom dashboard builder.

### Acceptance criteria
- Reports are tenant-isolated, permission-controlled, and reproducible.
- Audit logs cover admin mutations and sensitive actions.

## Phase 6 — Vertical Templates + Marketplace

### Objectives
- Deliver ready-to-use templates for multiple verticals.
- Define an extension system for future verticals/modules.

### User stories
- As a new tenant, I can choose a template (martial arts/music/language/dance/acting).
- As a platform owner, I can ship new templates without code forks.

### Engineering deliverables
- Template packages: default modules, terminology, roles, starter programs/levels.
- Template “diff” UI: show overrides vs defaults.
- Optional marketplace concept for third-party templates/modules.

### Non-goals
- Fully sandboxed plugin execution (can be “config + UI composition” first).

### Acceptance criteria
- A new tenant can be productive in <30 minutes using a template.
- Templates do not require adding `if vertical === ...` logic in core modules.


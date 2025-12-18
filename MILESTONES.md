# Milestones (Contributor-Ready)

This file defines concrete milestones (10–20) with acceptance criteria and verification scripts. Each milestone references the phases in `ROADMAP.md`.

> Notes for contributors:
> - The current repo is primarily UI with mocked data. Many milestones introduce backend and persistence work.
> - All milestones must preserve **tenant isolation**, **least privilege**, and **auditability** as first-class requirements.

---

## Milestone 1 — Repo Standards + CI Baseline (Phase 0)

### Problem
Contributors need predictable tooling, clear standards, and CI gates to safely build a SaaS.

### Requirements
- MUST: Document local setup (pnpm, env vars, scripts).
- MUST: CI runs `pnpm install`, build, and a non-interactive type/lint check strategy.
- SHOULD: Add a minimal test framework and at least one smoke test.
- NICE: Add pre-commit hooks.

### UI/UX expectations
- None (docs/CI only).

### API/data expectations
- None.

### Security constraints
- CI must not leak secrets; no secrets committed.

### Definition of Done
- Docs exist and CI is green on PRs.

### Demo script
1. Fresh clone → run documented commands.
2. Open PR → CI runs and reports status.

---

## Milestone 2 — Tenant-Scoped Routing Skeleton (Phase 1)

### Problem
Without tenant-scoped routing, it’s easy to accidentally mix tenant data and UI.

### Requirements
- MUST: Introduce a tenant slug in app routes: `/{tenant}/dashboard`, `/{tenant}/students`, etc.
- MUST: Add “Switch organization” UI for multi-tenant users (stub allowed).
- SHOULD: Preserve public routes (marketing + auth) at root.

### UI/UX expectations (screens)
- Tenant selector modal/dropdown.
- Tenant-aware sidebar/nav.

### API/data expectations
- Tenant slug resolves to `tenant_id` server-side.

### Security constraints
- Tenant slug is validated; no insecure direct object reference (IDOR).

### Definition of Done
- Navigating between two tenants uses different URLs and scoping is enforced server-side.

### Demo script
1. Visit `/tenant-a/dashboard` and `/tenant-b/dashboard`.
2. Confirm UI always displays current tenant context.

---

## Milestone 3 — Authentication (Phase 1)

### Problem
Current auth pages are UI-only; SaaS needs real authentication.

### Requirements
- MUST: Login, logout, password reset (or magic link).
- MUST: Secure sessions; CSRF protection; rate limiting on auth endpoints.
- SHOULD: Support OAuth provider (Google) for quick onboarding.

### UI/UX expectations (screens)
- `/auth/login`, `/auth/register`, `/auth/forgot-password` with real flows.

### API/data expectations
- Users persisted in DB.
- Password hashing (argon2/bcrypt).

### Security constraints
- No passwords stored in plaintext.
- Rate limit and lockout strategy documented.

### Definition of Done
- A user can create an account and login; session persists; logout clears session.

### Demo script
1. Register → login → access dashboard.
2. Logout → protected routes redirect.

---

## Milestone 4 — Tenant Membership + Invites (Phase 1)

### Problem
Multi-tenant SaaS requires users to be members of tenants with specific roles.

### Requirements
- MUST: `Tenant`, `Membership`, and invite model.
- MUST: Invite flow (email or link) assigns role.
- SHOULD: Multi-tenant user “switch org” works.

### UI/UX expectations (screens)
- Tenant settings: members list.
- Invite user modal.

### API/data expectations
- Tables: `tenants`, `memberships`, `invites`.
- Invite tokens expire and are single-use.

### Security constraints
- Invites are tenant-scoped and cannot be reused.
- Audit log: invite created/accepted.

### Definition of Done
- Admin invites staff; staff accepts; membership appears.

### Demo script
1. Tenant admin creates invite.
2. Invited user accepts and can access tenant routes.

---

## Milestone 5 — RBAC Permission System (Phase 1)

### Problem
Roles without permissions are ambiguous and insecure.

### Requirements
- MUST: Permission list (stable IDs) and default roles.
- MUST: Server-side enforcement (not only UI).
- SHOULD: Role editor for tenant admin (within safe limits).

### UI/UX expectations (screens)
- Settings → Roles and permissions.

### API/data expectations
- Tables: `roles`, `permissions`, `role_permissions`.

### Security constraints
- Least privilege defaults.
- Platform Owner-only capabilities separated from tenant roles.

### Definition of Done
- A user without permission cannot perform restricted actions.

### Demo script
1. Create role with limited perms.
2. Confirm UI and API enforce restrictions.

---

## Milestone 6 — Database + Tenancy Isolation (RLS) (Phase 1)

### Problem
Tenant isolation must be enforced even if a developer forgets to filter by tenant.

### Requirements
- MUST: Postgres with RLS on tenant-scoped tables.
- MUST: Transaction-scoped `app.tenant_id` context set per request.
- MUST: Add tests proving cross-tenant access is blocked.

### UI/UX expectations
- None required.

### API/data expectations
- RLS policies for core tables.

### Security constraints
- All tenant-scoped reads/writes blocked without tenant context.

### Definition of Done
- Tests demonstrate RLS prevents data leakage across tenants.

### Demo script
1. Seed tenant A and B.
2. Attempt cross-tenant query → denied.

---

## Milestone 7 — People: Students + Guardians (Phase 2)

### Problem
Student/guardian modeling must work across all verticals.

### Requirements
- MUST: `Person`, `StudentProfile`, `GuardianProfile`, relationships.
- MUST: CRUD UI for students; link guardians.
- SHOULD: Import/export students via CSV.

### UI/UX expectations (screens)
- Students list, student detail, guardian linking.

### API/data expectations
- Validations: unique email per tenant (optional), phone normalization.

### Security constraints
- Guardians can only see linked students.

### Definition of Done
- Tenant admin can create students and guardians and link them.

### Demo script
1. Create student + guardian.
2. Login as guardian → only linked student visible.

---

## Milestone 8 — Programs + Levels (Template-Friendly) (Phase 2)

### Problem
Verticals require flexible program and level structures.

### Requirements
- MUST: `Program`, `LevelDefinition`, progression ordering.
- MUST: Terminology override (e.g., “belt” label).
- SHOULD: Template can seed default levels.

### UI/UX expectations (screens)
- Programs list, program detail, level editor.

### API/data expectations
- Levels stored as ordered list with metadata.

### Security constraints
- Only staff/admin can modify programs/levels.

### Definition of Done
- Admin can define a program with levels and assign to students later.

### Demo script
1. Create program “Taekwondo”.
2. Add belts (white/yellow/...).

---

## Milestone 9 — Scheduling: ClassGroups + Sessions (Phase 2)

### Problem
All verticals need scheduling (lessons/classes/workshops).

### Requirements
- MUST: Create `ClassGroup` and schedule `Session`s.
- MUST: Instructor assignment and location.
- SHOULD: Calendar view (week/day).

### UI/UX expectations (screens)
- Schedule calendar, session detail, instructor availability (basic).

### API/data expectations
- Conflict detection (same instructor/time).

### Security constraints
- Instructors can only edit sessions they teach (ABAC).

### Definition of Done
- Admin schedules sessions; instructors see their schedule.

### Demo script
1. Create class group and sessions.
2. Login as instructor → verify visibility and edit restrictions.

---

## Milestone 10 — Attendance (Phase 2)

### Problem
Attendance is core for operations and reporting.

### Requirements
- MUST: Attendance taking per session.
- MUST: Bulk present/absent; notes.
- SHOULD: Attendance reports per student/program.

### UI/UX expectations (screens)
- Session attendance screen.
- Student attendance history.

### API/data expectations
- `attendance_records` keyed by (`tenant_id`, `session_id`, `student_id`).

### Security constraints
- Only authorized roles can modify attendance.

### Definition of Done
- Instructor can take attendance; guardian can view.

### Demo script
1. Take attendance for a session.
2. View attendance history.

---

## Milestone 11 — Platform Billing (Tenant Pays SaaS) (Phase 3)

### Problem
SaaS needs monetization and plan gating.

### Requirements
- MUST: Plans + subscriptions + trials.
- MUST: Stripe (or chosen PSP) integration with webhook verification.
- SHOULD: Gating premium modules by plan.

### UI/UX expectations (screens)
- Platform admin: plans.
- Tenant admin: billing page, plan status.

### API/data expectations
- Subscription state machine, idempotent webhook handlers.

### Security constraints
- Webhook signature validation + replay protection.

### Definition of Done
- Tenant can start trial and convert to paid plan.

### Demo script
1. Create tenant → start trial.
2. Simulate webhook → subscription becomes active.

---

## Milestone 12 — Tenant Billing (Students Pay Tenant) (Phase 3)

### Problem
Some tenants need to bill students/guardians; others do not.

### Requirements
- MUST: Feature-flag module `billing-tenant`.
- MUST: Create invoices and accept payments.
- SHOULD: Discounts and refunds.

### UI/UX expectations (screens)
- Tenant admin invoice list.
- Guardian portal payments.

### API/data expectations
- Separate tables/namespaces from platform billing.

### Security constraints
- Guardians only see their own invoices.

### Definition of Done
- Tenant can issue invoice; guardian can pay; receipt logged.

### Demo script
1. Create invoice for student.
2. Pay as guardian.

---

## Milestone 13 — Communications + Templates (Phase 4)

### Problem
Schools need announcements and reminders.

### Requirements
- MUST: Announcements module with audience targeting.
- MUST: Email/SMS template system with delivery logs.
- SHOULD: Opt-out + preferences.

### UI/UX expectations (screens)
- Announcement composer.
- Template editor.
- Delivery history.

### API/data expectations
- Delivery attempts and statuses persisted.

### Security constraints
- Rate limiting and tenant-based quotas.

### Definition of Done
- Tenant can send announcement; delivery logged.

### Demo script
1. Create announcement to guardians.
2. Verify delivery status.

---

## Milestone 14 — Audit Logs + Exports (Phase 5)

### Problem
Multi-tenant SaaS needs accountability and compliance tooling.

### Requirements
- MUST: Append-only audit log for sensitive actions.
- MUST: Export system with permissions.
- SHOULD: Data deletion/retention policies.

### UI/UX expectations (screens)
- Audit log viewer and filters.
- Export request UI.

### API/data expectations
- Audit log includes actor, resource, before/after refs, request id.

### Security constraints
- Audit logs are immutable; access is restricted.

### Definition of Done
- Admin can export audit logs; sensitive actions are recorded.

### Demo script
1. Change roles.
2. View audit log entry.

---

## Milestone 15 — Vertical Templates v1 (Phase 6)

### Problem
New tenants need fast onboarding tailored to verticals without code forks.

### Requirements
- MUST: Template selection in onboarding.
- MUST: Templates define terminology, modules, roles, starter levels/programs.
- SHOULD: “Diff” view to show template defaults vs tenant overrides.

### UI/UX expectations (screens)
- Onboarding wizard with template selection.
- Terminology editor.

### API/data expectations
- Templates stored as versioned config objects.

### Security constraints
- Only tenant admin can change template-derived config.

### Definition of Done
- A new tenant can select “Martial Arts” and immediately have belts/terminology configured.

### Demo script
1. Create new tenant.
2. Select “Music School” template.
3. Verify terminology/modules/seed data.


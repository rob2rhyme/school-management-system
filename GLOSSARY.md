# Glossary (Multi-Tenant, Multi-Vertical)

This glossary standardizes language used in issues, PRs, and docs.

## Platform / SaaS Terms

- **Platform Owner**: The SaaS operator (you). Can view/manage all tenants, plans, billing, and platform-wide settings.
- **Tenant**: A customer organization/account on the SaaS (e.g., “Westside Taekwondo”, “Harmony Music School”).
- **Tenant ID (`tenant_id`)**: The unique identifier used to scope data per tenant.
- **Organization**: Synonym for tenant in many contexts. Use “tenant” in engineering docs for clarity.
- **Membership**: A link between a user identity and a tenant, with a role (and thus permissions).
- **Role**: Named set of permissions (e.g., `owner`, `admin`, `instructor`, `guardian`, `student`).
- **Permission**: An atomic capability (e.g., `students.read`, `attendance.take`).
- **Module**: A toggleable feature set (billing, attendance, messaging, reporting, scheduling).
- **Template / Vertical Template**: A versioned configuration package that sets defaults for a tenant (terminology, modules, roles, starter program structures).
- **Terminology Overrides**: Per-tenant labels and copy changes (“Dojo” vs “School”, “Belt” vs “Level”).
- **Isolation**: Preventing data from one tenant being visible or modifiable by another tenant.
- **RLS (Row-Level Security)**: Database-level policy enforcement; recommended for tenant isolation in Postgres.

## Organization Structure

- **Location**: A physical (or virtual) branch within a tenant (e.g., “Downtown Studio”, “Online Classes”).
- **Staff**: A tenant member who performs operational/admin work.
- **Instructor**: Staff who teaches sessions/classes; may be a specialized staff role.

## People and Relationships

- **Person**: A human identity record (name/contact). May or may not have a platform login.
- **User**: A platform login identity (email/password/OAuth) that can belong to one or more tenants.
- **Student**: A learner profile within a tenant.
- **Guardian / Parent**: A person responsible for a student; may have portal access and payment responsibility.
- **Customer (Billing)**: The payer entity for tenant billing; often the guardian, sometimes the student (adult).

## Teaching and Delivery Model (Vertical-Agnostic)

- **Program**: A unit of instruction offering (e.g., “Beginner Guitar”, “Taekwondo”, “English A2”).
- **Course**: Sometimes used instead of Program; in this project prefer **Program** as the generic term.
- **Term**: A time-boxed period (semester/season/session); optional depending on tenant.
- **Class Group / Cohort**: A group of students who learn together (not necessarily a school “grade”).
- **Session**: A scheduled occurrence (one class/lesson/workshop event with time and location).
- **Schedule**: The set of sessions over time, often grouped by program/class group.
- **Enrollment**: A student’s participation in a program/class group/term; includes status changes.
- **Attendance**: Presence/absence records per student per session.

## Progression Concepts (Levels, Belts, Grades)

- **Level**: The generic progression unit (belt, grade, CEFR level, badge).
- **Belt**: Martial arts term for level (white belt, yellow belt, etc.).
- **Grade**: Could mean K-12 grade or dance grade; avoid K-12 assumptions in core naming.
- **CEFR**: Common European Framework of Reference for languages (A1–C2); a structured level system.
- **Progress Record**: A student’s current level and advancement history.
- **Assessment**: A test/exam/evaluation (belt test, recital evaluation, language exam, performance review).

## Billing and Payments

There are two “billing planes”:

- **Platform Billing**: The tenant pays the SaaS operator for using the platform (plans, trials, subscription).
- **Tenant Billing**: Students/guardians pay the tenant for classes/memberships (invoices, payments).

Other terms:
- **Invoice**: A bill issued (platform or tenant).
- **Subscription**: Recurring billing relationship (platform or tenant).
- **Discount / Coupon**: Reduces invoice totals; can be plan-based or promotional.
- **Refund**: Return of funds for a payment.
- **Receipt**: Proof of payment.

## Communication

- **Announcement**: A message broadcast to a tenant’s audience (students/guardians/staff).
- **Notification**: A delivery instance (email/SMS/push) tied to an event or automation rule.
- **Automation**: A rule-driven process that triggers notifications or actions (reminders, follow-ups).

## Security and Compliance

- **Least Privilege**: Users have only the permissions needed for their role.
- **Audit Log**: Append-only record of sensitive actions (who/what/when/where).
- **PII**: Personally Identifiable Information (names, emails, phones, addresses, DOB).
- **Data Export**: Ability to export tenant data or audit logs for compliance.
- **Data Deletion**: Ability to delete data per policy or user request, with retention constraints.


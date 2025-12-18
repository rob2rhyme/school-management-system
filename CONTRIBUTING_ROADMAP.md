# Contributing Roadmap Guide

This repo is evolving into a multi-tenant, multi-vertical SaaS. This document explains how contributors should pick work, implement safely, and keep the platform configurable rather than hardcoded.

Related docs:
- `ROADMAP.md`
- `MILESTONES.md`
- `ARCHITECTURE.md`
- `GLOSSARY.md`

## Security-First Contributor Rules

1. **Never trust the client**: UI gating is not authorization.
2. **Tenant isolation is mandatory**: every read/write must be tenant-scoped and tested.
3. **Least privilege by default**: new endpoints/features must be permissioned.
4. **Audit sensitive actions**: role changes, billing, exports, invite flows, data deletion.
5. **No secrets in code**: use env vars; avoid logging PII.

## How to Choose an Issue

1. Pick a milestone from `MILESTONES.md` and select a subtask that:
   - Has a clear UI screen list, entity model, and acceptance criteria.
   - Does not require rewriting unrelated areas.
2. Prefer “thin vertical slices”:
   - UI + API + data + tests + docs for one workflow.
3. If you discover missing prerequisites, open an issue tagged `blocked-by` and link it.

## Issue Labels (Recommended)

- `phase:0` … `phase:6`
- `module:core`, `module:billing-platform`, `module:billing-tenant`, `module:attendance`, `module:scheduling`, `module:messaging`, `module:reporting`
- `security`, `breaking`, `needs-design`, `good-first-issue`

## Branch Naming

Use:

- `feat/<short-description>` (new feature)
- `fix/<short-description>` (bug fix)
- `chore/<short-description>` (tooling/docs)
- `security/<short-description>` (security hardening)

Examples:
- `feat/tenant-scoped-routing`
- `fix/dark-mode-contrast-auth`
- `chore/ci-typecheck`

## Pull Request Checklist

### Must include
- Tests updated/added for new logic (especially tenancy + auth + billing).
- Screenshots or short screen recording for UI changes (light + dark mode).
- Docs updated if:
  - new env vars added
  - new routes introduced
  - new entities/permissions created
- No hardcoded “vertical” conditionals in core (see Template Rules below).

### Security checklist
- Tenant boundary enforced (server + DB policy if applicable).
- Authorization check in server action/route handler.
- Input validation (zod or equivalent) for all writes.
- Audit log entry for sensitive changes.
- No PII in logs; no insecure IDs exposed.

### UX checklist
- Accessible labels, keyboard navigation, focus states.
- Responsive layout (mobile + desktop).
- Text contrast works in light/dark/system themes.

## Code Ownership Boundaries (Conceptual)

These boundaries prevent vertical logic from leaking into core modules:

- **Core**: tenant, auth, membership, roles/permissions, people, configuration primitives.
- **Modules**: attendance, scheduling, billing, messaging, reporting.
- **Templates**: pure config + seed data; should not require new core logic for each vertical.

If a PR adds `if (vertical === ...)` in core logic, it likely needs redesign. Prefer:
- `TenantTerminology` overrides
- `LevelDefinition` metadata and ordered progression
- configurable workflows (“check-in”, “belt test”, “recital”, “workshop”)

## “Vertical Template” Guidelines

### What belongs in configuration (preferred)
- Terminology (labels and copy): “Dojo”, “Belt”, “Instructor”.
- Default modules: billing on/off, attendance on/off.
- Role defaults and permissions.
- Default programs and level ladders.
- Default dashboards (KPI choices, not custom queries).
- Custom fields: belt size, instrument type, CEFR exam code, etc.

### What belongs in code (only when necessary)
- A new reusable module capability (e.g., “level progression with prerequisites”).
- Generic UI components that templates can compose.
- Integrations (payments, email/SMS) that are cross-vertical.

## Definitions and Standards

### Definition of Done (DoD)
- Meets acceptance criteria in `MILESTONES.md`.
- Includes tests covering:
  - happy path
  - tenant boundary failure
  - permission failure
- Includes docs changes where relevant.
- No unrelated refactors.

### API/DB standards (target)
- All write endpoints validate with schemas (zod).
- Idempotency for webhooks and payment operations.
- Use stable permission IDs (`students.read`, `billing.invoices.write`, etc.).
- Prefer server actions for internal forms, route handlers for external integrations/webhooks.

### Accessibility and design system
- Use existing UI primitives in `components/ui/` (shadcn patterns).
- Prefer theme tokens (`bg-background`, `text-foreground`, `text-muted-foreground`) over hardcoded grays.

## How to Propose a New Module

Open a design issue with:
- Problem statement and target users.
- Entities and relationships.
- Routes/screens list.
- Permissions required.
- Tenant config toggles needed.
- Data retention/audit requirements.

Then link to a milestone or propose a new milestone (keep total milestones 10–20).


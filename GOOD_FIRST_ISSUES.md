# Good First Issues (Draft List)

This file proposes 10–20 issue-ready tasks aligned to `ROADMAP.md` and `MILESTONES.md`. Do not implement all at once—pick one and open a PR.

Each entry includes: suggested labels, phase + milestone reference, scope boundaries, acceptance criteria, and difficulty (S/M/L).

---

## 1) Add architecture diagram (image) to `ARCHITECTURE.md`
- Labels: `good first issue`, `docs`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Add a simple diagram (Mermaid or PNG/SVG) showing tenant/user/modules/db boundaries.
- Acceptance criteria:
  - `ARCHITECTURE.md` includes a readable diagram.
  - Diagram includes tenant isolation boundary and two billing planes.
- Difficulty: S

## 2) Add a “Routes map” section to `ARCHITECTURE.md`
- Labels: `good first issue`, `docs`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Document current `app/` routes and the recommended future `/{tenant}/...` structure.
- Acceptance criteria:
  - Lists current pages in `app/`.
  - Shows target tenant-scoped route examples.
- Difficulty: S

## 3) Add `env.example` (no secrets) + update README
- Labels: `good first issue`, `docs`, `tooling`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Create an example env file and document expected vars (even if unused today).
- Acceptance criteria:
  - `env.example` exists.
  - README references it in Local Dev Setup.
- Difficulty: S

## 4) Add GitHub Actions CI for `pnpm lint` + `pnpm build`
- Labels: `good first issue`, `tooling`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Add a minimal CI workflow for PRs only; no deployment.
- Acceptance criteria:
  - Workflow runs on PRs.
  - Uses pnpm and respects lockfile.
  - Fails if lint/build fail (non-interactive).
- Difficulty: M

## 5) Non-interactive lint strategy for Next.js
- Labels: `good first issue`, `tooling`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Ensure `pnpm lint` doesn’t prompt (add config or script strategy).
- Acceptance criteria:
  - `pnpm lint` runs without interactive prompts.
  - Document how linting is configured.
- Difficulty: M

## 6) Create a consistent empty-state UI component for lists/tables
- Labels: `good first issue`, `frontend`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Add a reusable “EmptyState” component and use it in 1–2 pages.
- Acceptance criteria:
  - Component supports title/description/action button.
  - Used in at least one list view (students/results/etc).
- Difficulty: S

## 7) Centralize navigation definitions (sidebar/header) into one module
- Labels: `good first issue`, `refactor`, `frontend`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Create a single source of truth for navigation links and labels.
- Acceptance criteria:
  - Sidebar uses centralized nav config.
  - No behavior change.
- Difficulty: M

## 8) Add “tenant slug” placeholder to UI (no backend)
- Labels: `good first issue`, `frontend`
- Phase/Milestone: Phase 1 / Milestone 2
- Scope: Update UI routing conventions (placeholders), without adding DB/auth.
- Acceptance criteria:
  - Routes/examples show `/{tenant}/...` path.
  - Clear TODO markers in docs only (no runtime tenancy logic).
- Difficulty: S

## 9) Add permission ID registry (docs-only)
- Labels: `good first issue`, `docs`
- Phase/Milestone: Phase 1 / Milestone 5
- Scope: Document a proposed permission list and naming conventions.
- Acceptance criteria:
  - `ARCHITECTURE.md` or new doc lists 30–60 core permission IDs.
  - Includes examples for billing/attendance/scheduling.
- Difficulty: M

## 10) Normalize terminology in types to be vertical-agnostic (types-only)
- Labels: `good first issue`, `refactor`
- Phase/Milestone: Phase 2 / Milestone 8
- Scope: Update `types/` to introduce `Program`, `Session`, `Enrollment` interfaces without changing UI behavior.
- Acceptance criteria:
  - Adds new types without breaking builds.
  - Leaves existing UI using old types for now (no wide refactor).
- Difficulty: M

## 11) Add a “Theme QA” checklist to PR template
- Labels: `good first issue`, `docs`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Expand PR template checkboxes for dark/light/system verification.
- Acceptance criteria:
  - PR template includes theme checks.
- Difficulty: S

## 12) Add a “Data privacy stance” section to README
- Labels: `good first issue`, `docs`
- Phase/Milestone: Phase 0 / Milestone 1
- Scope: Document how the project will treat PII, exports, deletion, audit logs at a high level.
- Acceptance criteria:
  - README contains short privacy/security section.
  - Links to `ARCHITECTURE.md` security section.
- Difficulty: S

## 13) Add an onboarding wizard UI skeleton (static)
- Labels: `good first issue`, `frontend`
- Phase/Milestone: Phase 1 / Milestone 2
- Scope: Add a static multi-step UI (template selection, terminology, modules) with mocked state only.
- Acceptance criteria:
  - Screens exist and are navigable.
  - No backend calls.
- Difficulty: M

## 14) Add a calendar “session” card component (UI-only)
- Labels: `good first issue`, `frontend`
- Phase/Milestone: Phase 2 / Milestone 9
- Scope: Create a reusable session card and apply it in timetable views.
- Acceptance criteria:
  - Component supports instructor, location, time, status.
  - No new data model required.
- Difficulty: S


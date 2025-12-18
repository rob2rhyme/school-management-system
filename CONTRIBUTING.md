# Contributing

Thanks for your interest in contributing! This project uses a **fork → branch → pull request** workflow (no direct pushes to `main`).

Before you start, read:
- `ROADMAP.md`
- `MILESTONES.md`
- `ARCHITECTURE.md`
- `CONTRIBUTING_ROADMAP.md`
- `GOOD_FIRST_ISSUES.md`

## Contribution Model (Fork-Based)

1. Fork the repo on GitHub.
2. Create a branch in your fork.
3. Open a PR back to `main` in this repository.

## Branch Naming

Use one of:
- `feature/<short-name>`
- `fix/<short-name>`
- `docs/<short-name>`

Examples:
- `feature/tenant-routing-skeleton`
- `fix/auth-form-contrast`
- `docs/architecture-diagram`

## Commit Messages

Conventional commits are **recommended** (not strictly required):
- `feat: ...`
- `fix: ...`
- `docs: ...`
- `chore: ...`

Keep messages small and descriptive.

## Local Development

### Prerequisites
- Node.js 18+
- pnpm (repo uses `packageManager` in `package.json`)

### Setup
```bash
pnpm install
```

### Run dev server
```bash
pnpm dev
```

### Lint
```bash
pnpm lint
```

### Build
```bash
pnpm build
```

## Pull Request Checklist

### Must
- [ ] `pnpm lint` passes
- [ ] `pnpm build` passes
- [ ] UI changes include screenshots (light + dark mode) or a short recording
- [ ] Docs updated if you add/rename routes, env vars, or introduce new concepts

### If database changes are involved (future-ready)
- [ ] Migration notes included (what changed + how to apply/rollback)
- [ ] Tenant isolation is enforced (DB policies + server checks)
- [ ] Tests cover tenant-boundary failures (cross-tenant access must be impossible)

## Definition of Done (Roadmap-Aligned)

Your PR is “done” when:
- It meets acceptance criteria for the milestone / issue.
- It preserves the **config-first** philosophy:
  - No hardcoded vertical checks in core logic (avoid `if (vertical === ...)`).
  - Prefer templates, terminology overrides, and module toggles.
- It is **tenant-safe**:
  - Never rely on UI gating for authorization.
  - Server/DB enforcement is required for sensitive actions (see `ARCHITECTURE.md`).
- It includes minimal, targeted changes (no drive-by refactors).

## How to Pick Work

Start from:
- `GOOD_FIRST_ISSUES.md` (starter tasks)
- `MILESTONES.md` (larger roadmap milestones)

If the issue is ambiguous:
1. Ask clarifying questions in the issue.
2. Propose acceptance criteria updates before implementation.


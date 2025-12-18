# Start Here

This repository is the foundation for a **multi-tenant, multi-vertical school SaaS** (dojos, music schools, language schools, dance/acting studios, and more). Today it is **prototype/UI-first**; backend capabilities will be built roadmap-first with strong security and tenant isolation.

## Key Docs

- Product roadmap: `ROADMAP.md`
- Milestones (acceptance criteria): `MILESTONES.md`
- Target architecture: `ARCHITECTURE.md`
- Contributor standards: `CONTRIBUTING.md` and `CONTRIBUTING_ROADMAP.md`
- Domain glossary: `GLOSSARY.md`
- Starter tasks: `GOOD_FIRST_ISSUES.md`

## How to pick a first issue

1. Start with `GOOD_FIRST_ISSUES.md`.
2. Choose a task that is:
   - small and verifiable
   - aligned to a milestone/phase
   - unlikely to require major refactors
3. If requirements are unclear, open an issue asking for acceptance criteria updates before coding.

## Local setup (quick)

```bash
pnpm install
pnpm dev
```

## PR checklist (summary)

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- Screenshots/recording for UI changes (light + dark mode)
- Keep work config-first (avoid hardcoded vertical logic in core)

See `.github/pull_request_template.md` for the full template.

## Non-goals for early contributions

- No multi-tenancy/auth/billing/database implementation unless explicitly tracked in a milestone.
- No heavy dependency additions.
- No broad refactors unrelated to the issue’s acceptance criteria.


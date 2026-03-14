# AI Coding Rules (Prototype Mode)

This repository is for fast UX and product exploration, not production software.

## Goals
Optimize for:
- speed of iteration
- clarity of interaction
- human evaluation of ideas

NOT:
- architecture
- scalability
- authentication
- persistence
- backend correctness

---

## Implementation principles

1. Prefer a single file over multiple files
2. Prefer hardcoded data over APIs
3. Prefer local state over server state
4. Avoid abstractions unless they remove repetition immediately
5. Avoid configuration
6. No database
7. No authentication
8. No environment variables unless strictly required
9. No background jobs
10. No test frameworks

---

## UI guidelines

- Tailwind only
- Functional React components
- Minimal styling
- No design systems
- One interaction per screen
- The experience should be understandable in 10 seconds

---

## Behavior rules

When asked to build a feature:
1. Implement the smallest possible working version
2. Do not create backend routes unless explicitly requested
3. Fake data rather than fetching data
4. Do not install libraries unless necessary for the interaction
5. Never add analytics

---

## Definition of done

A prototype is complete when:
- a user can experience the idea in under 30 seconds
- the interaction communicates the concept without explanation
- the code is readable in under 2 minutes

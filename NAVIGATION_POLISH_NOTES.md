# Navigation polish hotfix

## Fixed

- Replaced the IntersectionObserver-only navigation state with deterministic scroll-position tracking.
- Clicking Work, Capabilities, Experience, About, or Contact updates the active state immediately.
- Smooth scrolling is offset correctly for the sticky header.
- The mobile navigation now reflects the active section as well.
- Replaced the generic north-east arrow in the navbar CTA with a custom technical arrow mark.
- Added restrained motion and reduced-motion support.

## Files

- `components/navbar.tsx`
- `app/globals.css`
- `APPLY_AND_VERIFY_NAVIGATION_POLISH.cmd`

# NBH Cinematic Canvas

Build a SINGLE-PAGE, FULL-SCREEN LANDING PAGE for an Afrohouse event brand called:

NOTHING BUT HOUSE

NBH

This is NOT a multi-page website and NOT a traditional festival website.

It should be one immersive, cinematic digital experience designed primarily to create anticipation and drive ticket sales.

==================================================

1. BRAND FOUNDATION — FOLLOW EXACTLY

==================================================

The brand is built around:

RHYTHM, CULTURE AND CONNECTION

Brand values:

CURATED EXPERIENCES

COMMUNITY FIRST

AUTHENTIC CULTURE

The brand believes events should be remembered because they made people FEEL something — through carefully curated sound, beautiful spaces and genuine human connection.

The aesthetic should communicate:

AFROHOUSE

CULTURE

MOVEMENT

CONNECTION

EDITORIAL

PREMIUM

AFROFUTURIST

CINEMATIC

AUTHENTIC

Do NOT make this look like a generic nightclub website or EDM festival template.

==================================================

2. PAGE FORMAT

==================================================

ONLY ONE PAGE.

ONLY ONE PRIMARY HERO EXPERIENCE.

The entire site should be a full-screen 100vh visual composition.

The visitor should immediately understand:

WHAT IT IS

WHERE IT IS

WHEN IT IS

AND HOW TO BUY A TICKET

Do not create:

- About section

- Artist section

- Location section

- Schedule section

- Footer-heavy layout

- Multiple pages

- Large navigation menus

- Content cards

The page should feel like an interactive premium event poster.

==================================================

3. BACKGROUND

==================================================

Use ONE FULL-BLEED IMAGE covering the entire viewport.

The image should communicate the official photography direction:

- Real moments

- People in motion

- Afrohouse atmosphere

- Texture

- Architecture

- Warm neutral tones

- Authentic human interaction

- Cinematic nightlife

- African cultural energy

- Afro-futurist visual feeling

Avoid:

- Overly posed people

- Heavy filters

- Oversaturated nightclub imagery

- Crowded compositions

- Cheap stock-photo aesthetics

Use:

object-fit: cover;

Add a subtle dark overlay using the brand's Rich Black.

The image should remain clearly visible.

Use a subtle vignette and very light grain texture.

Do not over-process the photography.

==================================================

4. BRAND COLORS

==================================================

Use ONLY the official brand palette:

RICH BLACK

#080808

IVORY

#F7F3ED

ORANGE

#FC8210

PASTEL ORANGE

#FCAD37

VIVID RED

#FB2610

Primary usage:

#080808 = overlays, background, typography where required

#F7F3ED = primary typography / ticket button

#FC8210 = accent / countdown details / interactive elements

#FCAD37 = subtle secondary accent

#FB2610 = very limited emphasis

Do NOT introduce random colors.

The visual balance should remain primarily:

Rich Black + Ivory

with Orange used as a controlled accent.

==================================================

5. TYPOGRAPHY

==================================================

Follow the brand guideline typography system.

Use:

AILERON

and

TT COMMONS PRO

Do not introduce unnecessary additional fonts.

Maximum two typefaces.

Use Aileron for strong editorial/display moments.

Use TT Commons Pro for supporting information, UI and labels.

Typography should feel:

Clean

Modern

Editorial

Precise

Confident

Use strong hierarchy and generous spacing.

==================================================

6. TOP BAR

==================================================

Create a minimal top bar.

LEFT:

Use the official NBH logo.

If the actual logo asset is available, use it exactly as provided.

Do NOT redraw, distort or modify the logo.

RIGHT:

Small outlined or minimal button:

GET TICKETS

The button should link to:

const TICKET_URL = "YOUR_TICKET_LINK";

Do not create a traditional navigation menu.

==================================================

7. MAIN HERO

==================================================

Position the main content in the center/lower-center of the screen.

Primary headline:

NOTHING

BUT

HOUSE

Make this the strongest typographic element.

Large.

Bold.

Editorial.

Highly visible over the image.

Below:

RHYTHM, CULTURE AND CONNECTION

Then:

NAIROBI • KENYA

Then the event date:

NOVEMBER 2026

Do not invent a specific November date.

Create an easily editable variable:

const EVENT_DATE = "2026-11-XXT20:00:00";

When the exact event date is later provided, it can be replaced in one location.

==================================================

8. COUNTDOWN

==================================================

The countdown MUST count toward an event date in NOVEMBER 2026.

Create a live JavaScript countdown.

Display it horizontally:

12       08       42       18

DAYS   HOURS   MINUTES  SECONDS

Design:

- Large numbers

- Small uppercase labels

- Ivory typography

- Orange accents

- Thin dividers

- Editorial spacing

Example:

12  |  08  |  42  |  18

DAYS | HOURS | MINUTES | SECONDS

Keep it horizontal on desktop.

On mobile, compress the spacing so it still works elegantly without horizontal scrolling.

The countdown should feel integrated into the NBH brand identity, not like a generic website timer.

Use subtle orange detailing.

==================================================

9. PRIMARY CTA

==================================================

Below the countdown:

GET TICKETS

This must be the strongest interactive element.

Button style:

Ivory background

Rich Black text

Minimal border

Modern editorial shape

Hover:

- Slight scale

- Smooth transition

- Subtle orange accent

Under the button:

LIMITED TICKETS AVAILABLE

Keep this small and understated.

==================================================

10. SMALL BRAND STATEMENT

==================================================

Add a very subtle supporting line somewhere near the lower section:

CURATED AFROHOUSE EXPERIENCES

THROUGH MUSIC, CULTURE & CONNECTION

Keep it small.

Do not turn it into a paragraph.

==================================================

11. LAYOUT

==================================================

Desktop composition:

--------------------------------------------------

NBH                                  GET TICKETS

              NOTHING

                 BUT

                HOUSE

       RHYTHM, CULTURE AND CONNECTION

                  NAIROBI • KENYA

                  NOVEMBER 2026

          12 | 08 | 42 | 18

        DAYS HOURS MINUTES SECONDS

             [ GET TICKETS ]

          LIMITED TICKETS AVAILABLE

       CURATED AFROHOUSE EXPERIENCES

        MUSIC • CULTURE • CONNECTION

--------------------------------------------------

Everything should breathe.

Do not overcrowd the screen.

==================================================

12. MOTION

==================================================

Use restrained, premium animation.

On initial load:

1. Background image gently fades in

2. Logo appears

3. Main title reveals

4. Event details fade upward

5. Countdown appears

6. Ticket button appears

Use subtle opacity and translate animations.

Background can have an extremely subtle slow movement/parallax effect.

Do NOT use:

- Flashing

- Particle effects

- Excessive parallax

- Neon animations

- Loud transitions

The experience should feel refined.

==================================================

13. RESPONSIVE

==================================================

Desktop:

100vh cinematic composition.

Mobile:

Still one single page.

The image remains full-screen.

The title remains dominant.

Countdown remains readable.

Ticket CTA remains visible without requiring excessive scrolling.

No horizontal scrolling.

Optimize for:

1920px

1440px

1280px

1024px

768px

430px

390px

375px

==================================================

14. CODE STRUCTURE

==================================================

Use:

HTML

CSS

JavaScript

Create a clearly marked configuration section:

const EVENT_DATE = "2026-11-XXT20:00:00";

const TICKET_URL = "YOUR_TICKET_LINK";

const EVENT_LOCATION = "NAIROBI • KENYA";

Make these easy to edit.

The countdown must update every second.

When the countdown reaches zero, replace the countdown with:

THE EXPERIENCE HAS BEGUN

==================================================

15. FINAL ART DIRECTION

==================================================

The final design should feel like:

A LUXURY AFRICAN DIGITAL POSTER

+

AN AFROHOUSE EVENT INVITATION

+

A LIVE COUNTDOWN

+

A TICKET CONVERSION EXPERIENCE

The website should communicate the NBH philosophy without explaining it.

Someone should see it and immediately feel:

THIS IS AN EXPERIENCE.

Prioritize:

IMAGE

TYPOGRAPHY

SPACE

COUNTDOWN

TICKET CTA

Use the brand identity consistently and confidently.

The final result must feel premium, modern, culturally grounded and internationally relevant while remaining distinctly Afrohouse.

Build the complete working page now.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/24201e2e-7f03-4dfe-85f1-99debfcdaae7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# Kalamazoo Basement Repair

Lead-generation site for basement waterproofing and foundation work across
Kalamazoo, Kalamazoo County and southwest Michigan.

Fourth site from this template, and the first one built to a different shape.
`site.config.ts` is still the only file that differs structurally between
markets — everything else reads from it.

## Why this one is built differently

The first three sites lead with a city service page and hang ten town pages
underneath. Search Console says that was the wrong shape, and the research
behind this market says so more bluntly:

**Suburb demand does not exist for this trade.** 34 towns were tested across two
metros and 31 returned no measurable search volume at all. A control on the same
towns showed `roofing kettering ohio` at 150/mo, so the towns are visible to the
tools — people simply do not search for basement work by suburb. Hence four town
pages here, not ten.

**The demand is in symptoms.** `water in basement` alone is 10,000/mo at $17.00 a
click with no map pack above it. The wider symptom cluster — cracks, leaks,
seepage, musty smells — is roughly 21,400/mo at difficulty 0–4. That is why
`problems` is a first-class content collection in this repo, why it sits in the
header, and why it appears above services on the homepage.

**The market was measured, not assumed.** Kalamazoo's map pack runs 54 / 30 / 7
reviews with no paid ads above it, against Huntsville's 186 / 39 / 3,500 with
five ads. The organic top ten is DR 0–22 with almost no links to the ranking
pages.

Known weakness: this trade peaks in July and troughs in November. A quiet first
quarter is the seasonal curve, not a failure.

## Content architecture

| Collection | Count | Role |
|---|---|---|
| `problems` | 8 | Symptom pages. The commercial front door. Each carries `fixedBy`, the slug of the service that solves it — validated at build time. |
| `services` | 9 | The repairs themselves. |
| `pages` | 10 | Home, hubs, costs, about, contact, legal. |
| `faqs` | 7 | Cost, urgency, insurance, DIY, timelines, resale. |
| `towns` | 4 | Portage, Battle Creek, Plainwell, Richland. |

Roughly 26,000 words. Every page carries in-prose internal links; the earlier
three sites had 104 markdown files between them containing zero.

## Before this goes live

1. ~~Buy a 269 number and replace the placeholder everywhere.~~ **Done,
   29 Aug 2026.** The live number is in `site.config.ts` and in the
   `description` front matter of all 38 markdown files. `check-leaks.mjs`
   passes. If it ever changes, change both places and re-run that script.
2. **Replace the logo and icons.** `public/images/logo.png`, `logo-512.png`,
   `public/apple-touch-icon.png` and `public/favicon.ico` are still the previous
   market's artwork.
3. **Set `RESEND_KEY`** as a Cloudflare dashboard secret. It must never be
   committed — see the note in `wrangler.jsonc`.

   When you create that key in Resend, **check the Domain dropdown reads
   `kalamazoobasementrepair.com`**. Resend keys can be locked to a single
   domain, and a key pointed at the wrong one returns
   `403 This API key is not authorized to send emails from …`. That is exactly
   what silently swallowed every Birmingham lead, missed call and voicemail for
   a fortnight — the key was created before its domain was verified, so the
   dropdown only offered the previous site. Thirty seconds of checking here
   saves a fortnight of invisible loss.
4. ~~Generate a new `VOICEMAIL_TOKEN` and set it in the Twilio Studio flow.~~
   **Not needed — this site runs on CallRail, not Twilio.** Nothing will POST to
   `/api/voicemail` or `/api/missed-call`, because CallRail handles its own call
   alerts and recording. Leave `VOICEMAIL_TOKEN` unset: the handlers check for it
   first and return `403` without it, so the endpoints fail closed, which is the
   behavior we want for routes nothing should be calling. The contact form is
   unaffected — it uses `/api/lead`, which only needs `RESEND_KEY`.
5. **Add hero images.** No content file references one yet, so pages render
   without them — correctly, but plainly.
6. ~~Turn on Always Use HTTPS for the zone in Cloudflare, and add the www to
   root redirect.~~ **Done, 27 Aug.** Always Use HTTPS is on, and a Redirect
   Rule is deployed: `(http.host eq "www.kalamazoobasementrepair.com")` →
   301 to `concat("https://kalamazoobasementrepair.com", http.request.uri.path)`
   with query string preserved. Identical to the other three zones.

   **But the zone has no DNS records at all yet**, so nothing resolves and the
   redirect rule cannot fire. When you deploy, bind **both** the root and the
   `www` hostname to the Worker as custom domains. Binding only the root leaves
   `www.kalamazoobasementrepair.com` dead rather than redirecting, and the rule
   sits idle. Cloudflare warned about exactly this when the rule was deployed;
   it was deployed anyway because the record appears on deploy.

## Checks

```
node scripts/check-leaks.mjs
```

Catches values left over from a previous market — wrong city, wrong state code,
wrong phone number, wrong domain, and British spellings on a US site. It exits
non-zero, so it can gate a deploy. It is worth running before every push; it has
already caught a real mistake on this build.

## Content standards

`CONTENT-BRIEF.md` documents the voice, the honesty rules and the frontmatter
schemas. Read it before writing any new page. The short version: no invented
years in business, no invented statistics, no fabricated testimonials, no street
address, and say plainly when a homeowner needs no work at all.

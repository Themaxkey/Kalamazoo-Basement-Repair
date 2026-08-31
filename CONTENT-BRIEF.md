# Content brief — Kalamazoo Basement Repair

Read this fully before writing a word. Every writer works from this file.

## The business, stated honestly

This is a lead-generation site. Inquiries go to local licensed basement
waterproofing and foundation contractors who contact the homeowner directly.
The site says so plainly on the About page and in the footer disclosure. It is
not pretending to be a contractor with trucks.

That has hard consequences for what you may write:

- **Never claim years in business.** No "serving Kalamazoo since 1998", no
  "over 20 years", no "three generations". Not in copy, not in a heading, not
  implied by "we've seen thousands of…".
- **Never invent a street address, a premises, a yard, or a showroom.**
- **Never invent statistics.** No "83% of Kalamazoo basements", no "we find
  this in 4 out of 5 homes", no made-up survey figures. If you want to convey
  frequency, use ordinary language — "commonly", "more often than not", "the
  usual cause" — which is honest hedging rather than fake precision.
- **Never invent named customers, testimonials, case studies or reviews.**
- **Never name specific local competitors.**
- **No fake urgency.** No countdown offers, no "only 3 slots left".
- Do not promise outcomes that cannot be promised. A crawl space cannot be made
  permanently mold-free; a settled house cannot always be lifted back to level.
  Saying so is a feature of this site's voice, not a weakness.

Writing "we" is fine — it reads as the operation as a whole and does not assert
a crew size or a founding date.

## Voice

Read this passage from the sister site. This is the standard:

> Surface runoff is the commonest and the cheapest to fix. Downspouts
> discharging next to the foundation, ground sloping back toward the house, a
> driveway or patio shedding toward the crawl space vents. A meaningful share
> of the standing water we find is solved outside the house for a few hundred
> dollars, and any contractor who does not check this before quoting interior
> drainage is not doing you a service.

What makes it work, and what you must reproduce:

- **Specific and technical without being jargon.** Name the actual mechanism.
- **Willing to say when work is not needed**, or is cheaper than the reader
  fears. This is the single strongest trust signal available and it costs
  nothing. Use it in every page where it is true.
- **Plain American English, no marketing register.** No "nestled",
  "boasts", "state-of-the-art", "peace of mind", "look no further",
  "we understand that". No exclamation marks.
- **Sentences vary in length.** Short ones land the point.
- **No bullet-point soup.** Prose paragraphs, with `##` subheads. A list is
  allowed where the content genuinely is a list, but it is not the default.
- Second person for the homeowner, and assume they are intelligent and worried.

## What is true about Kalamazoo and southwest Michigan

Use these. Do not invent beyond them.

- Southern Michigan's code frost depth is deep — around 42 inches. Once you are
  excavating that far down anyway, a full basement is barely more work than a
  crawl space, which is why basements are near-universal here and rare in the
  South. This is a genuinely useful thing to explain to a reader.
- The region is glacial terrain: outwash sand and gravel, moraine ridges, and
  clay till in bands. Drainage behavior changes street to street because of it.
  Sandy ground drains fast but moves water fast too; clay till holds water
  against a wall and swells.
- The Kalamazoo River runs through the city and the water table in the valley
  and low-lying neighborhoods sits high, seasonally more so.
- Freeze-thaw cycling is a major driver of cracking here in a way it is not in
  the South — water enters a crack, freezes, expands, widens the crack.
- Spring is the stress test: frozen ground thaws, snowmelt and spring rain
  arrive together, and the water table comes up. Most basements reveal their
  problems in March, April and May.
- Older Kalamazoo housing stock has stone or unreinforced block foundation
  walls. Block walls fail differently from poured concrete — horizontal cracking
  at the mortar course, bowing inward — and that distinction matters for
  diagnosis.
- Winters mean a basement is heated living or storage space here, so damp is a
  bigger deal than in a vented southern crawl space.

If you want to say something specific that is not on this list and you cannot
verify it, write around it. Vagueness beats invention.

## Frontmatter — exact schemas

Every file is markdown with YAML front matter. Do **not** put an `# H1` in the
body; the template renders the H1 from `title`. Start the body with prose or a
`##` subhead.

`description` must be 140–165 characters and must contain the phone number
verbatim as `(269) 000-0000` (a placeholder — Max swaps it later and a script
checks for stragglers).

**problems/** (symptom pages)
```yaml
---
title: "Water in the Basement in Kalamazoo, MI"      # the on-page H1
seoTitle: "Water in Your Basement? Kalamazoo, MI | What It Means"
description: "..."                                    # 140-165 chars, incl. (269) 000-0000
tagline: "Water on the floor"                         # 2-5 words, used as the card label
fixedBy: "basement-waterproofing"                     # MUST be a slug in site.config.services
order: 1
---
```

**services/**
```yaml
---
title: "Basement Waterproofing in Kalamazoo, MI"
seoTitle: "Basement Waterproofing Kalamazoo, MI | Free Inspection"
description: "..."
order: 1
---
```

**towns/**
```yaml
---
title: "Basement Repair in Portage, MI"
seoTitle: "Basement Repair Portage, MI | Waterproofing & Foundations"
description: "..."
town: "Portage"                                       # bare town name, no state
---
```

**faqs/**
```yaml
---
title: "How Much Does Basement Waterproofing Cost in Michigan?"
seoTitle: "Basement Waterproofing Cost Michigan | Real Numbers"
description: "..."
question: "How much does basement waterproofing cost in Michigan?"
---
```

**pages/**
```yaml
---
title: "..."
seoTitle: "..."
description: "..."
tagline: "..."        # home.md only — the sub-headline under the hero H1
---
```

## Internal links

Write **in-content links in the prose**, in natural sentences. This is the
single biggest thing the first three sites got wrong — 104 markdown files
between them contained zero internal links. Every page you write should link to
two or three others where it genuinely helps the reader.

Use root-relative paths with a trailing slash: `/basement-waterproofing/`,
`/water-in-basement/`, `/sump-pump-installation/`,
`/basement-waterproofing-cost/`, `/contact/`.

Available slugs are exactly the `slug` values in `site.config.ts` under
`services`, `problems`, `towns` and `staticPages`. Do not link to a slug that
is not in that file — it will 404.

## Length

- problems: 700–1,000 words
- services: 700–1,100 words
- towns: 400–550 words
- faqs: 400–600 words
- pages: home 400–600, about 600–800, others 500–900

Do not pad to hit a number. A tight 700 beats a bloated 1,000.

## Prices

Where you give figures, give real-world US ranges for this trade and say they
are ranges and why they vary. Reasonable anchors: interior perimeter drain with
sump, roughly $8,000–$15,000 on a typical house; a single sump pump replacement
$400–$1,200 installed; epoxy or urethane crack injection $400–$900 per crack;
carbon fiber straps for a bowing wall $600–$1,000 per strap; full exterior
excavation and membrane $15,000–$30,000+. Always frame as "commonly", "in this
market usually", never as a quote.

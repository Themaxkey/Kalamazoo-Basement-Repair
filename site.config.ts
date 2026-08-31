/**
 * THE ONLY FILE THAT CHANGES BETWEEN SITES.
 *
 * Everything else in this repository reads from here: page copy, meta titles,
 * schema, internal links, the phone number, the colors.
 *
 * ================= WHY THIS SITE IS BUILT DIFFERENTLY =======================
 * The first three sites lead with a city service page and hang ten town pages
 * beneath it. Search Console says that was the wrong shape, and Kalamazoo was
 * chosen on measurements that say so plainly:
 *
 *   - Suburb demand does not exist for this trade. 34 towns were tested across
 *     two metros; 31 returned no measurable volume at all. A control on the
 *     same towns showed "roofing kettering ohio" at 150/mo, so the towns are
 *     visible to the tools — people simply do not search for basement work by
 *     suburb. Hence FOUR town pages here, not ten.
 *
 *   - The demand is in symptoms. "water in basement" alone is 10,000/mo at
 *     $17.00 a click with no map pack above it. The wider symptom cluster —
 *     cracks, leaks, seepage, musty smells — is ~21,400/mo at difficulty 0-4.
 *     That is why `problems` is a first-class collection in this repo and why
 *     it sits in the header, which is new.
 *
 *   - The market is soft, measured rather than assumed. Kalamazoo's map pack
 *     runs 54 / 30 / 7 reviews with no paid ads above it, against Huntsville's
 *     186 / 39 / 3,500 and five ads. Organic top ten is DR 0-22 with almost no
 *     links to the ranking pages.
 *
 * Seasonality is the known weakness: this trade peaks in July and troughs in
 * November. A quiet first quarter is the curve, not a failure.
 * ============================================================================
 *
 * Do not write a glob with a star-slash in it inside this comment block — it
 * terminates the comment early and the build fails with Unexpected "*".
 */

export const site = {
  business: {
    name:      'Kalamazoo Basement Repair',
    shortName: 'Kalamazoo Basement',
    // Live number, set 29 Aug 2026. It also appears in plain text inside the
    // `description:` front matter of every markdown file, because it shows in
    // the search snippet. If it ever changes, change it in BOTH places and run
    // `node scripts/check-leaks.mjs` — that script fails the build on strays.
    phone:     '(269) 307-7363',
    phoneRaw:  '+12693077363',
    email:     'info@kalamazoobasementrepair.com',
    domain:    'kalamazoobasementrepair.com',
  },

  location: {
    city:      'Kalamazoo',
    state:     'Michigan',
    stateAbbr: 'MI',
    zip:       '49007',
    county:    'Kalamazoo County',
    lat:        42.2917,
    lng:       -85.5872,
    radiusMi:   35,
  },

  /**
   * `basement repair` rather than `basement waterproofing`, deliberately.
   * Waterproofing is the money term and it has its own service page, but the
   * content plan is symptom-led — cracks, bowing walls, seepage, smells — and
   * half of that is repair work rather than waterproofing. A site called
   * waterproofing that mostly writes about cracks is fighting its own name.
   */
  trade: {
    noun:       'basement repair',
    nounPlural: 'basement waterproofing and repair services',
    schemaType: 'HomeAndConstructionBusiness',
  },

  /**
   * Fourth palette, fourth distinct look. Green (Bowling Green), navy
   * (Birmingham), teal (Huntsville) are taken, so this one is graphite with a
   * blue CTA — the only one of the four with a cool accent rather than a warm
   * one.
   *
   * Contrast measured, not guessed:
   *   graphite #31363f + white text = 12.14:1  (AA and AAA body)
   *   CTA      #0a5fb4 + white text =  6.35:1  (AA body)
   *   marker   #f0b429 on graphite  =  6.51:1  (well over the 3:1 UI floor)
   * Do NOT use the CTA blue as the header marker — #0b6bcb on #31363f is
   * 2.30:1 and fails the UI threshold. That is what the amber is for.
   */
  brand: {
    primary:   '#31363f',   // header + footer
    primaryDk: '#22262d',
    red:       '#0a5fb4',   // CTA and phone button — kept as `red` so the
    redDk:     '#084b8f',   // shared stylesheet does not need renaming
    marker:    '#f0b429',   // current-page underline on the header only
    accent:    '#0891b2',
    ink:       '#111827',
    body:      '#374151',
    surface:   '#f6f7f9',
    logo:      '/images/logo.png',
  },

  form: {
    heading:     'Get a free inspection',
    sub:         'Tell us where you are and what you are seeing. No charge, no obligation.',
    placeholder: 'Water on the floor after rain, crack in the wall, musty smell…',
    button:      'Request my free inspection',
  },

  legal: {
    disclosure:
      'Requests submitted through this website are shared with local, licensed and insured basement waterproofing and foundation contractors, who will contact you directly using the details you provide.',
  },

  /** Root-level service pages, in nav order. */
  services: [
    { slug: 'basement-waterproofing',          name: 'Basement Waterproofing' },
    { slug: 'interior-basement-waterproofing', name: 'Interior Waterproofing' },
    { slug: 'exterior-basement-waterproofing', name: 'Exterior Waterproofing' },
    { slug: 'sump-pump-installation',          name: 'Sump Pump Installation' },
    { slug: 'sump-pump-repair',                name: 'Sump Pump Repair' },
    { slug: 'foundation-crack-repair',         name: 'Foundation Crack Repair' },
    { slug: 'basement-wall-repair',            name: 'Basement Wall Repair' },
    { slug: 'egress-window-installation',      name: 'Egress Window Installation' },
    { slug: 'crawl-space-encapsulation',       name: 'Crawl Space Encapsulation' },
  ],

  /**
   * SYMPTOM PAGES — the reason this repo has a collection the others do not.
   * These are what people actually type at 11pm, and every one of them was
   * checked for a map pack before it earned a slot. Volumes are US monthly,
   * Ahrefs, Aug 2026:
   *
   *   water-in-basement                     10,000  KD 3  $17.00  no map pack
   *   basement-wall-crack-repair             1,700  KD 1   $4.50  no map pack
   *   water-seeping-through-basement-wall    1,300  KD 4   $2.00  no map pack
   *   cracks-in-basement-floor               1,200  KD 0   $2.00  no map pack
   *   leaking-basement-wall                  1,100  KD 1   $4.50  no map pack
   *   horizontal-crack-in-basement-wall      1,100  KD 1   $1.50  no map pack
   *   musty-smell-in-basement                1,100  KD 3   $0.70  no map pack
   *   bowing-basement-wall                     800  KD 1   $3.50  no map pack
   */
  problems: [
    { slug: 'water-in-basement',                   name: 'Water in the Basement' },
    { slug: 'basement-wall-crack-repair',          name: 'Cracked Basement Wall' },
    { slug: 'water-seeping-through-basement-wall', name: 'Water Seeping Through a Wall' },
    { slug: 'cracks-in-basement-floor',            name: 'Cracks in the Basement Floor' },
    { slug: 'leaking-basement-wall',               name: 'Leaking Basement Wall' },
    { slug: 'horizontal-crack-in-basement-wall',   name: 'Horizontal Crack in a Wall' },
    { slug: 'musty-smell-in-basement',             name: 'Musty Smell in the Basement' },
    { slug: 'bowing-basement-wall',                name: 'Bowing or Leaning Wall' },
  ],

  /**
   * FOUR towns, not ten, and this is the deliberate part. Battle Creek is the
   * only surrounding town in this metro with measurable search volume for the
   * trade (60/mo). Portage earns a page on adjacency and size rather than
   * search demand — it is contiguous with Kalamazoo and a third of the metro
   * lives there. Plainwell and Richland are the northern edge of a realistic
   * service radius. Do not add more without volume to justify them; the
   * Bowling Green site has twelve town pages and nine of them have never
   * received an impression.
   */
  towns: [
    { slug: 'basement-repair-portage-mi',      name: 'Portage' },
    { slug: 'basement-repair-battle-creek-mi', name: 'Battle Creek' },
    { slug: 'basement-repair-plainwell-mi',    name: 'Plainwell' },
    { slug: 'basement-repair-richland-mi',     name: 'Richland' },
  ],

  /** Standalone pages that are not services, problems, towns or FAQs. */
  staticPages: [
    { slug: 'services',                   name: 'Services' },
    { slug: 'basement-problems',          name: 'Basement Problems' },
    { slug: 'service-area',               name: 'Service Area' },
    { slug: 'basement-waterproofing-cost', name: 'Costs' },
    { slug: 'about',                      name: 'About' },
    { slug: 'contact',                    name: 'Contact' },
    { slug: 'privacy-policy',             name: 'Privacy Policy' },
    { slug: 'sms-terms-and-conditions',   name: 'SMS Terms and Conditions' },
  ],

  nav: [
    { href: '/',                             label: 'Home' },
    { href: '/basement-problems/',           label: 'Problems' },
    { href: '/services/',                    label: 'Services' },
    { href: '/service-area/',                label: 'Service Area' },
    { href: '/basement-waterproofing-cost/', label: 'Costs' },
    { href: '/faq/',                         label: 'FAQ' },
    { href: '/about/',                       label: 'About' },
    { href: '/contact/',                     label: 'Contact' },
  ],
} as const;

export type Site = typeof site;
export default site;

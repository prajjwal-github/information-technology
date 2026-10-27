# PCCOE – Department of Information Technology Website

The revamped website of the **Department of Information Technology**, Pimpri Chinchwad College of
Engineering (PCCOE), Pune. It uses the same header, footer and colour palette as the
[Computer Department website](https://github.com/MayurKharat0390/PCCOE-Computer-Dept), with all new
content for IT taken from [it.pccoepune.com](https://it.pccoepune.com/).

**Phase 1 (done):** Home page and About Us page.

## How to open it

Double-click **`index.html`**. That's it. No installation, no server, no build step.
An internet connection is needed for the fonts, icons, and Tailwind. All photos and logos are stored locally in `assets/images/`.

## Folder structure

```
information-technology/
├── index.html                 ← HOME PAGE (double-click to open the site)
├── about.html                 ← ABOUT US PAGE
│
├── components/                ← Parts shared by every page (edit once, changes everywhere)
│   ├── header.js              ← Top strip, college logo header, main menu, news ticker
│   └── footer.js              ← Footer, back-to-top button, search pop-up
│
├── assets/
│   ├── css/
│   │   ├── header-footer.css  ← Header & footer design copied from the Computer dept site
│   │   └── it-pages.css       ← Styles and animations for the IT pages
│   ├── js/
│   │   ├── tailwind-config.js ← PCCOE colour palette for Tailwind classes
│   │   └── main.js            ← Slider, counters, scroll animations, menu, search
│   └── images/                ← Official photos: banners, gallery, HOD, logos (see images/README.md)
│
└── README.md                  ← This file
```

## What is on each page

**Home (`index.html`)**
1. Hero slider (4 slides, auto-plays, swipe on phones)
2. Animated numbers: established 2001, intake 120, 24+ faculty, M.Tech intake 18
3. About Us summary with "Department at a Glance" cards
4. Programs offered: B.Tech IT and M.Tech AI & Data Science
5. Honours & Minor courses: Data Science, AI & ML, Cyber Security, Blockchain
6. From HOD's Desk (short)
7. Faculty research expertise
8. Student achievements and workshops
9. Student testimonials slider
10. Campus video tour, Mandatory Disclosure and PCET Brochure links
11. Admissions call to action

**About Us (`about.html`)**
About Department and key facts, From HOD's Desk, Vision & Mission, Programs & Intake table,
Milestones timeline, Academic Coordinators, Faculty Strength and Program Outcomes (PO1–PO12).
A side menu highlights the section you are reading.

## Common edits

| I want to…                         | Open this file                | What to do |
|------------------------------------|-------------------------------|------------|
| Change a menu link                 | `components/header.js`        | Edit the `<li>` lines in the menu |
| Change the scrolling news ticker   | `components/header.js`        | Edit the `items` list in `tickerItems` |
| Change footer address / links      | `components/footer.js`        | Edit the footer columns |
| Add something to search (Ctrl + K) | `assets/js/main.js`           | Add a line to `SEARCH_ITEMS` |
| Change banner photos               | `assets/images/banners/`      | Replace a file, or change the path in `index.html` |
| Change the HOD photo               | `assets/images/`              | Replace `hod.jpg` |
| Make anything fade in on scroll    | any page                      | Add `class="reveal"` to the element |
| Change brand colours               | `assets/css/header-footer.css` (`:root`) and `assets/js/tailwind-config.js` | Keep both in sync |

## Adding a new page

1. Copy `about.html` and rename it, e.g. `faculty.html`.
2. Change the `<title>` and `data-page="..."` on the `<body>` tag.
3. Replace everything inside `<main>…</main>` with the new content.
4. Add a link to it in `components/header.js`.

## Built with

HTML, CSS, JavaScript and [Tailwind CSS](https://tailwindcss.com/) (CDN), with Font Awesome
icons and the Outfit and Plus Jakarta Sans fonts. All animations respect the visitor's
"reduce motion" setting.

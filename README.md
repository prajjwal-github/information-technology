# PCCOE – Department of Information Technology Website

The revamped website of the **Department of Information Technology**, Pimpri Chinchwad College of
Engineering (PCCOE), Pune. It uses the same header, footer and colour palette as the
[Computer Department website](https://github.com/MayurKharat0390/PCCOE-Computer-Dept). The content
is copied as it is from [it.pccoepune.com](https://it.pccoepune.com/); only the design is new.

**Built with:** HTML5, CSS3, Bootstrap 5.3 and PHP (no database).

**Status:** Home page (`index.php`) ready for approval. Other pages will be added after approval;
until then their menu links open the page on the official site.

## How to run it

**On a PHP server (Apache, e.g. XAMPP or the college hosting):** copy the folder into the web root
(for XAMPP, `htdocs/information-technology`) and open `http://localhost/information-technology/`.

**Without XAMPP:** if PHP is installed, open a terminal in this folder and run

```
php -S localhost:8000 router.php
```

then open http://localhost:8000. An internet connection is needed for the fonts and icons.

## Folder structure

```
information-technology/
├── index.php                  ← HOME PAGE: lists the page's parts in order
│
├── includes/                  ← Shared by every page (edit once, changes everywhere)
│   ├── config.php             ← Contact details, MAIN MENU links, helper functions
│   ├── head.php               ← <head>: title, fonts, Bootstrap, CSS files
│   ├── header.php             ← Top strip, college logo header, main menu, spotlight ticker
│   └── footer.php             ← Footer, back-to-top button, search pop-up, JS files
│
├── components/
│   └── ui.php                 ← Reusable elements: section_title(), action_button()
│
├── sections/
│   └── home/                  ← One file per Home page section (content is at the top of each)
│       ├── hero-notices.php   ← Photo slider + Notices / News & Announcements
│       ├── about.php          ← About us + Mandatory Disclosure and PCET Brochure
│       ├── dept-glance.php    ← IT Department at Glance (3 cards)
│       ├── testimonials.php   ← Student Testimonials + Important Links
│       ├── honours-video.php  ← Honour & Minor Courses, Swaratarang 2k24, Video Section
│       └── popup.php          ← FDP 2026 poster shown when the page opens
│
├── assets/
│   ├── css/
│   │   ├── style.css          ← Global styles + header & footer (from the Computer dept site)
│   │   └── home.css           ← Home page styles
│   ├── js/main.js             ← Menu, search (Ctrl + K), animations, notices scroll, pop-up
│   ├── images/                ← Official photos and logos (see images/README.md)
│   └── vendor/bootstrap/      ← Bootstrap 5.3.3 (stored locally)
│
├── .htaccess                  ← Keeps page addresses like the official site (/hod opens hod.php)
├── router.php                 ← Same thing for the local `php -S` preview only
└── README.md
```

## Page addresses (URLs)

Addresses stay the same as on the official site, in lowercase: `/hod`, `/vision-mission`,
`/faculty-profile`, and so on. A page is saved as `hod.php`, and `.htaccess` makes `/hod` open it.
Old addresses with capital letters (such as `/Training`) redirect to the lowercase one.

The menu links work out where to go by themselves (`page_url()` in `includes/config.php`): once
`hod.php` exists, every link to `hod` opens the new page; until then it opens the official site.

## Common edits

| I want to…                           | Open this file                     | What to do |
|--------------------------------------|------------------------------------|------------|
| Change a menu link                   | `includes/config.php`              | Edit `$NAV_MENU` |
| Change phone / email / address       | `includes/config.php`              | Edit `$SITE` |
| Change the spotlight ticker          | `includes/header.php`              | Edit `$spotlight` at the top |
| Add a notice / news item             | `sections/home/hero-notices.php`   | Add a line at the top of `$news` |
| Change slider photos                 | `sections/home/hero-notices.php`   | Edit `$slides` (photos in `assets/images/slider/2024/`) |
| Change testimonials                  | `sections/home/testimonials.php`   | Edit `$testimonials` |
| Remove the opening pop-up poster     | `index.php`                        | Delete the `popup.php` line |
| Change brand colours                 | `assets/css/style.css`             | Edit the `:root` block |
| Make anything fade in on scroll      | any section                        | Add `class="reveal"` to the element |

## Adding a new page (after approval)

1. Create `pagename.php` in the main folder using the official address, in lowercase
   (e.g. `vision-mission.php`).
2. Copy `index.php` into it, set `$currentPage`, `$pageTitle` and `$pageDescription`.
3. Put its sections in `sections/pagename/` and `require` them between `<main>` and `</main>`.
4. Nothing else: menu links to that page now open it automatically.

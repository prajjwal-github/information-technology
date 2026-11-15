# Department of Information Technology – PCCOE Website

New design of the official IT department website (https://it.pccoepune.com/).
All text, photos and documents are taken from the official site as they are;
only the design is new. The header, footer and colours match the PCCOE
Computer Department website.

**Technology: HTML5, CSS3 and Bootstrap 5 only.**
No PHP, no database, no build step, nothing to install.

## Folder structure

```
information-technology/
├── index.html                 Home page
├── about.html                 one .html file per page (41 pages, see list below)
├── ...
├── assets/
│   ├── css/
│   │   ├── style.css          colours, fonts, header and footer (every page)
│   │   ├── home.css           home page only
│   │   └── pages.css          all other pages (title banner, side menu, cards, tables)
│   ├── js/
│   │   ├── layout.js          header, main menu, spotlight line and footer (every page)
│   │   └── main.js            small effects: mobile menu, search, back-to-top, font size
│   ├── images/
│   │   ├── logo/              PCCOE and PCET logos, favicon
│   │   ├── home/              photos used on index.html
│   │   └── <page-name>/       photos used on <page-name>.html
│   └── vendor/bootstrap/      Bootstrap 5.3.3 (stored locally, works offline)
├── .htaccess                  optional, Apache only: /about opens about.html
└── _redirects                 optional, Netlify only: /Training -> /training
```

## How the header and footer work

The header, main menu, "Spotlight" news line and footer are written **once**, in
`assets/js/layout.js`. Every page has two empty boxes that this file fills:

```html
<div id="site-header"></div>   ...page content...   <div id="site-footer"></div>
<script src="assets/js/layout.js"></script>
```

So a change in `layout.js` (a new menu link, a new phone number) shows on all
pages at once. It works on any web server and also when a page is opened by
double-clicking the file, because it does not load anything else.

## How to update content

| To change...                         | Edit                                                        |
|--------------------------------------|-------------------------------------------------------------|
| Text, tables, photos of a page       | that page's `.html` file, between `PAGE CONTENT START` and `PAGE CONTENT END` |
| Menu links                           | `MENU` list at the top of `assets/js/layout.js`             |
| Spotlight news line                  | `SPOTLIGHT` list in `assets/js/layout.js`                   |
| Phone, email, address, map           | `SITE` block in `assets/js/layout.js`                       |
| Home page notices                    | the "Notices" list in `index.html` (and `notices.html`)     |
| Colours and fonts                    | `:root` block at the top of `assets/css/style.css`          |
| A photo                              | put it in `assets/images/<page>/` and change the `src` in the page |

**Add a new page:** copy any page (for example `about.html`), rename it,
change the `<title>` and the `<h1>`, replace the content between the
`PAGE CONTENT` markers, then add one line to `MENU` in `layout.js`.

Content blocks use normal Bootstrap 5 classes (`card`, `card-header`,
`card-body`, `table`, `accordion`, `row`/`col-md-*`), so a new block can be
copied from any existing page.

PDFs (syllabus, timetables, academic calendar, etc.) are still stored on
https://it.pccoepune.com/ and the pages link to them there.

## Run and deploy

* **On your computer:** open `index.html` in a browser. That is all.
  (Optional, for a local web address: `python -m http.server` in this folder,
  then open http://localhost:8000.)
* **On a server:** upload the whole folder (Apache, Nginx, IIS, college server).
  No setup is needed. On Apache, `.htaccess` keeps the old addresses (`/about`).
* **On Netlify:** drag and drop the folder (or the zip) at app.netlify.com/drop.
  Netlify serves `about.html` at `/about` automatically.

## Pages

| Menu            | Pages |
|-----------------|-------|
| Home            | `index.html`, `notices.html` |
| About us        | `about.html`, `vision-mission.html`, `hod.html`, `pso.html`, `bos.html` |
| People          | `faculty-profile.html`, `admin-staff-profile.html` |
| Academics       | `b-tech-it.html`, `m-tech-it.html`, `btechsyllabus.html`, `timetables.html`, `acalender.html` (Examination links to the PCCOE site) |
| Research        | `research-coordinator-desk.html`, `patents-and-copyrights.html`, `publication.html`, `research-grants-publications.html`, `books-published.html`, `workshops-conferences.html`, `entrepreneurship-activities.html`, `consultancy-work.html`, `center-of-excellence.html`, `dcoe.html`, `iot.html` |
| Student Corner  | `professional-chapters.html`, `student-dev-welfare.html`, `stud-achievements.html`, `pdc.html`, `itsa-event.html`, `higher-study-cell-events.html` |
| Placements      | `placements.html`, `internships.html`, `alumini.html`, `training.html`, `mou.html` |
| Facilities      | `infrastructure.html`, `research_facilities.html`, `library.html` |
| Activities      | `activities.html` |
| Contact         | `contact.html` |

Page file names are the same as the official site addresses, in lowercase
(`https://it.pccoepune.com/hod` → `hod.html`).

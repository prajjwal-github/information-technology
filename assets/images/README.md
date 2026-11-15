# Images

All photos come from the official IT department website (https://it.pccoepune.com/).

Each page has its own folder, named like the page file:

| Folder                            | Used on                                   |
|-----------------------------------|-------------------------------------------|
| `home/`                           | `index.html` (slider, testimonials, posters, HOD photo) |
| `faculty-profile/`                | `faculty-profile.html`                    |
| `placements/`                     | `placements.html` (also company logos on `internships.html`) |
| `activities/`                     | `activities.html`                         |
| ... and so on                     | one folder per page                       |
| `logo/`                           | PCCOE / PCET logos in the header, favicon |

To change a photo: put the new file in the page's folder and change the
`src="assets/images/<page>/<file>"` in that page's HTML file.
Keep photos small (under 300 KB; `.webp` or `.jpg`, about 1600 px wide is enough).

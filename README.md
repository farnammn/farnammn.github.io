# Farnam Mansouri — single-page website

All content is now in **index.html**. The top navigation scrolls to About,
Publications, and Awards on the same page. Research themes and all publications
are both visible; there are no tabs or separate content pages.

## Use and publish

Open `index.html` in a browser, keeping the files in this folder together.
Upload the contents of the package to your existing website repository root,
replacing matching files. Include `.nojekyll`, an empty hidden file. No build,
installation, framework, or external font is needed. Nothing has been pushed
to your repository on your behalf.

The old HTML filenames remain only as tiny redirects so that links to the
previous website continue to work. Replace those files as well when uploading.
Existing links such as `all-publications.html#P1` are redirected to the matching
entry in the single page. Without JavaScript, old-page redirects still lead to
the correct general section; a visitor may need to select a specific paper again.

## Editing

- `index.html`: biography, research themes, all publications, awards, profile links,
  and the portrait image reference.
- `style.css`: appearance and responsive layout.
- `site.js`: optional current-section indication in the navigation. Removing it
  does not remove any content or disable native anchor navigation.
- `CV.pdf`: replaced with the most recently supplied CV PDF (the PDF itself is unchanged).

The website lists 12 refereed publications and six manuscripts, with
consecutive website-specific labels [P1]–[P12] and [M1]–[M6]. Manuscript
titles, authors, venues, years, and awards have been updated from the new CV.
Full conference names remain visible. The omitted manuscript is absent from
the HTML bibliography and research-theme links. Related-paper links scroll to
their entries on the same page.

## Photo — externally hosted, not bundled

The photograph is the image in the About section of your original website:

https://13148888a.site123.me/

The image currently referenced by `index.html` is:

https://images.cdn-files-a.com/uploads/1314895/400_5b55ca824bddf.jpg

It appears beside the About text on wider screens and above the text on narrow
screens. It is an existing photograph, not a generated portrait. CSS crops the
image for display; it does not modify the original file.

**The photo is loaded from that external host, not stored in this ZIP.** Its URL
was verified using the browsing tool, but the working environment could not
download the image bytes. Consequently the offline screenshots show the explicit
photo fallback, not a fabricated portrait.

For a fully self-contained site, save the original image as `profile.jpg` beside
`index.html`, then replace that external URL in the `<img src="...">` attribute
with `profile.jpg`. A new local photo can be used the same way. If your image has
a different composition, adjust `object-position` in `.profile-photo img` in
`style.css` (for example, `center center`).

## Checks

The website retains the previous single-page layout, while the manuscripts,
multiple-target-labelers research theme, and awards have been updated from the
new PDF CV. All in-page link targets
exist and IDs are unique. Layout was checked in Chromium at widths of 390 and 1360 pixels,
with no horizontal overflow or JavaScript errors. All in-page anchors were
checked against existing IDs. The site supports native anchor navigation
without JavaScript, and the CSS respects reduced-motion preferences.

Browser network navigation is restricted in the working environment, so tests
rendered the exact delivered HTML with the delivered CSS and JavaScript inlined.
The remote photograph could not be rendered locally; its fallback was tested.
Old-page redirect templates were validated statically, not with live deployment.
External paper links and bibliographic claims were preserved, not re-audited.

The phone number is not displayed in the webpage. It remains in the supplied PDF CV.

## November 2026 update

The Learning with multiple target labelers theme links to [P3] and [M1] and mentions ongoing work on the sample complexity of learning from multiple hidden thinkers without adding a paper entry or citation. The website
publication list follows the current CV but omits the *Hidden Thinkers / Multiple
Thinkers* manuscript, as requested. All manuscript numbers are consecutive on
the website (M1–M6), so they differ after that omission from the numbering in
the attached academic CV. The newest `CV.pdf` is provided verbatim: as a separate
downloadable document, it still contains that manuscript. If you want it omitted
from the downloadable CV as well, edit the CV source before replacing `CV.pdf`.

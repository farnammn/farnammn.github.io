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
- `CV.pdf`: unchanged from the previous website package.

Publication numbering, full conference names, inline years, author lists,
contribution markers, and publication statuses are unchanged. The 19 publications
and six awards are retained. Related-paper links scroll to and highlight entries
on this same page.

## Photo — externally hosted, not bundled

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

The biography, theme text, publication entries, awards, and CV were compared
against the previous website package and preserved. All in-page link targets
exist and IDs are unique. Layout was checked at widths of 320, 390, 768, 920,
and 1360 pixels, without horizontal overflow. Native section links and
related-paper links were tested in Chromium. The full page and its navigation
also work with JavaScript disabled. Smooth scrolling respects reduced-motion
preferences.

Browser network navigation is restricted in the working environment, so tests
rendered the exact delivered HTML with the delivered CSS and JavaScript inlined.
The remote photograph could not be rendered locally; its fallback was tested.
Old-page redirect templates were validated statically, not with live deployment.
External paper links and bibliographic claims were preserved, not re-audited.

The phone number is not displayed in the webpage. It remains in the unchanged CV.

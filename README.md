# Farnam Mansouri — website

All content is in **index.html**. The top navigation scrolls to About,
Publications, and Awards on the same page. Research themes and all publications
are both visible; there are no tabs or separate content pages.

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

## Photo

For a fully self-contained site, save the original image as `profile.jpg` beside
`index.html`, then replace that external URL in the `<img src="...">` attribute
with `profile.jpg`. A new local photo can be used the same way. If your image has
a different composition, adjust `object-position` in `.profile-photo img` in
`style.css` (for example, `center center`).

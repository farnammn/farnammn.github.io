/* Optional enhancement: indicate which top-level section is in view.
   All content, anchor links and CSS smooth scrolling work without this file. */
(() => {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const links = [...document.querySelectorAll('.site-nav a')];
  if (!sections.length || !links.length) return;
  let queued = false;
  function update() {
    let current = sections[0].id;
    const marker = Math.min(180, window.innerHeight * 0.22);
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) current = section.id;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
      current = sections[sections.length - 1].id;
    }
    for (const link of links) {
      if (link.getAttribute('href') === '#' + current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    queued = false;
  }
  function requestUpdate() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('hashchange', requestUpdate);
  update();
})();

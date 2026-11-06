/* nav.js — one menu for every page.
 *
 * The page has an empty <div id="nav"></div> where the menu should go.
 * This script fetches nav.html once and copies it in, so adding a link
 * means editing nav.html and nothing else.
 *
 * Two things to know:
 *   1. If the page is opened from the filesystem (file://), the browser
 *      refuses to fetch another file. In that case the links below are
 *      used instead — same links, written once, here.
 *   2. The current page is found from the file name, so the menu can
 *      mark it with aria-current without any page having to tell it.
 */
(function () {
  var mount = document.getElementById("nav");
  if (!mount) return;

  var page = location.pathname.split("/").pop() || "index.html";

  function markCurrent(root) {
    var links = root.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href === page) links[i].setAttribute("aria-current", "page");
    }
  }

  var fallback = [
    '<nav class="site-nav">',
    '  <a class="site-nav__logo" href="index.html">◆ my-site</a>',
    '  <ul class="site-nav__links">',
    '    <li><a href="index.html">Home</a></li>',
    '    <li><a href="quotes.html">Quotes</a></li>',
    '    <li><a href="project.html">Projects</a></li>',
    '    <li><a href="machine.html">Machine</a></li>',
    '  </ul>',
    '  <a class="site-nav__action" href="machine.html">Try the machine</a>',
    '</nav>'
  ].join("\n");

  function place(html) {
    mount.innerHTML = html;
    markCurrent(mount);
  }

  if (location.protocol === "file:") {
    place(fallback);
    return;
  }

  fetch("nav.html")
    .then(function (response) {
      if (!response.ok) throw new Error("nav.html: " + response.status);
      return response.text();
    })
    .then(place)
    .catch(function () {
      place(fallback);
    });
})();

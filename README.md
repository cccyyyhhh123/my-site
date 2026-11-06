# my-site — the learning website

Four pages built during Web Technologies.

| File | What it is |
| --- | --- |
| `index.html` | Home: a hero photograph and an overview of the site |
| `quotes.html` | Sixteen quotes, a random one at the top, and a filter |
| `project.html` | Six project ideas, who each is for, how I would build one |
| `machine.html` | A switch that turns itself off, and a reaction game |

## One menu, four pages

`nav.html` holds the menu. Every page has `<div id="nav"></div>` and loads `nav.js`,
which fetches the fragment once and inserts it — so a new link is edited in one file.
Opened from the filesystem the fetch is refused, so `nav.js` falls back to the same
links written inside the script.

## Run it

```
python -m http.server 8000
```

The menu needs a server to fetch `nav.html`; from `file://` the fallback is used.

## Identity

`Images/favicon-32.png`, `Images/icon-180.png`, `Images/cover-1200x630.jpg`.

Written by Yuhan Cai.

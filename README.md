# Ukendiran M · portfolio

Personal site of **Ukendiran M**: web developer, designer and founder of
[Digital Savagers](https://www.digitalsavagers.com/). Live at <https://ukendiran.netlify.app/>.

One static page, no build step:

- `index.html` holds all the copy as plain HTML (it reads fine with JavaScript off, and search engines see every word).
- Motion: [GSAP](https://gsap.com/) + ScrollTrigger + SplitText and [Lenis](https://lenis.darkroom.engineering/), loaded from jsDelivr.
- 3D: a [three.js](https://threejs.org/) particle field that morphs into a new shape for each section:
  `</>` (developer), a globe with arcs from Coimbatore to London and Italy, the ad funnel, a full-stack layer stack,
  project orbits, an automation network, a learning curve, a quote mark and the `UM` monogram.
- Fallbacks: no WebGL shows SVG outlines; reduced-motion users get no pins, typing or scrubbing.

## Edit

- Text, projects, skills, education: edit the HTML sections in `index.html` (`<!-- 05 WORK -->` and so on).
- Case-study panels, the boot command and the typed role line: the `CONTENT` object at the top of the module script.
- Images: `assets/img/` (WebP, 1280×800 for projects; `og-image.jpg` is the 1200×630 social preview).

## Deploy

Netlify copies the site files into `dist/` and serves that (`netlify.toml`); pushing to the repo deploys. Preview locally with any static server, for example
`python -m http.server 5077` and open <http://127.0.0.1:5077/>.

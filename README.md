# DEE.EXE — An Engineer's Universe

DEE.EXE is B. Deekshaa's personal site: an evolving engineering notebook and art archive. It introduces her interests in satellite navigation, signals, embedded systems, research, and creative work. The site is designed as a small project that can be read, edited, and hosted as static files while learning web development.

## Features

- Responsive, single-page layout with About, Projects, Research, Experience, Art, Currently Exploring, and Contact sections
- Artwork-only animated black-hole universe with accretion rings, stars, particles, and an accessible fullscreen viewer
- Data-driven art collection with no fictional titles or generated artwork; the orbit remains empty until real images are added
- Keyboard-accessible navigation, mobile menu, expandable project notes, reduced-motion support, and no runtime dependencies
- No framework, build tool, or runtime dependency

## Technologies

- Semantic HTML5
- Custom CSS3 for layout, typography, responsiveness, diagrams, and motion
- Vanilla JavaScript for navigation, the artwork orbit and viewer, footer year, and back-to-top control

## Links

- GitHub Pages URL (configured; first deployment pending): <https://dee-kshaa.github.io/dee-personal-site/>
- Public repository: <https://github.com/dee-kshaa/dee-personal-site>

## Files

```text
personal-site/
├── index.html
├── style.css
├── script.js
├── artworks.js
├── assets/
│   └── artwork/
│       └── README.md
├── README.md
└── LICENSE
```

## Run locally

Open `index.html` directly, or start a static server in this folder:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

The public repository is configured to deploy from the `main` branch at `/ (root)`. After pushing changes, check the **Actions** tab and the Pages section under **Settings** for deployment status, then open the live URL above.

## Add original artwork

No actual artwork image files were included in the supplied portfolio folder or website. The artwork universe therefore starts with zero cards; it does not display procedural stand-ins or treat sample titles as actual works.

1. Add your own image files to `assets/artwork/` (JPG/JPEG, PNG, or WebP; portrait, landscape, and square images are supported). For example: `assets/artwork/my-mandala.jpg`.
2. Add one entry for each image to the array in `artworks.js`, using the exact title and medium you want shown:

```js
window.artworks = [
  {
    id: 'my-mandala',
    src: 'assets/artwork/my-mandala.jpg',
    title: 'Your verified title',
    category: 'Mandala',
    alt: 'A concise visual description of your artwork',
    description: 'Optional description written by you.',
    attribution: 'Optional scan or photo credit'
  }
];
```

The path is relative to the site, so it works on GitHub Pages under `/dee-personal-site/`. Use your actual artwork and metadata. Images use `object-fit: contain` so the viewer does not crop or distort them. Keep `description` and `attribution` only when there is information to share.

## Content to verify and personalize

The GitHub and LinkedIn links point to Dee's profiles. No public email address was supplied, so Email remains a visible placeholder. Before submission, verify all project descriptions and experience entries against original records. In particular, add the exact details for the NMIC '26 review-paper status and the rover's actual hardware/network version. No measurements, rankings, publication identifiers, or GitHub project repositories are claimed here.

The source portfolio folder contains the black-hole/orbit concept and placeholder SVG art, but no actual artwork image files. The new Art section retains the animated universe concept and waits for real images instead of using those placeholders. See `assets/artwork/README.md` and `artworks.js` to add them.

## AI-use disclosure

AI assistance drafted this page's structure, visual CSS, project-note wording, and small JavaScript interactions. Dee supplied the portfolio and challenge brief; the initial code and wording were generated with AI. Dee should review, edit, test, and be able to explain the submitted work. This disclosure describes the current starting point and should be updated to match Dee's own edits and learning before submission.

## Credits

Built from Dee's supplied art-portfolio HTML and the Hack Club Stardance Personal Site brief. The orbital diagrams and art-inspired CSS visuals are original to this project. The font stack uses DM Sans, DM Mono, and Playfair Display when Google Fonts is available, with local system fallbacks.

## License

See [LICENSE](LICENSE).

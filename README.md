# DEE.EXE — An Engineer's Universe

DEE.EXE is B. Deekshaa's personal site: an evolving engineering notebook and research portfolio. It introduces her interests in satellite navigation, signals, embedded systems, research, and creative work. The site is designed as a small project that can be read, edited, and hosted as static files while learning web development.

## Features

- Responsive, single-page layout with About, Projects, Research, Experience, Research Universe, Currently Exploring, and Contact sections
- Animated black-hole Research Universe with three category orbits, stars, particles, and accessible entry details
- Compact, keyboard-accessible research and project satellites orbiting the black hole; activation opens verified entry details
- Keyboard-accessible navigation, mobile menu, expandable project notes, reduced-motion support, and no runtime dependencies
- No framework, build tool, or runtime dependency

## Technologies

- Semantic HTML5
- Custom CSS3 for layout, typography, responsiveness, diagrams, and motion
- Vanilla JavaScript for navigation, the Research Universe orbit and entry dialog, footer year, and back-to-top control

## Links

- GitHub Pages URL (configured; first deployment pending): <https://dee-kshaa.github.io/dee-personal-site/>

## Files

```text
personal-site/
├── index.html
├── style.css
├── script.js
├── universe-data.js
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

The GitHub Pages URL is listed above. After committing and pushing changes, check Actions and Pages settings for the deployment status. Keep asset and page links repository-relative so they resolve under `/dee-personal-site/`.

## Research Universe content

The orbit reads from `universe-data.js`. Add entries only when their titles, descriptions, status, and URLs can be supported by source material. Use `research`, `projects`, or `repositories` arrays; repository entries should only be added after verifying their URL and project description. Each satellite is a keyboard-accessible button that opens a detail dialog, and reduced-motion preference freezes the orbits in place.

The Research Universe includes the ICWITE 2026 paper presentation listed in the existing portfolio archive and a revised GNSS/SBAS review manuscript listed alongside NMIC '26 in that archive. Local paper files verify both titles. The available files do not confirm an NMIC acceptance, presentation, or publication, so the entry states that status as unconfirmed. Four engineering project entries are included; the rover is described as a design and validation plan because the available paper does not document completed implementation or measured results. The repository ring is empty because no project repository URL could be verified for safe publication.

## Content to verify and personalize

The GitHub and LinkedIn links point to Dee's profiles. No public email address was supplied, so Email remains a visible placeholder. The rover entry uses the hardware described in its local project manuscript; its implementation and test results remain unconfirmed. No paper URL, acceptance claim, publication identifier, project-repository URL, or measured result is claimed here.

The source portfolio includes the black-hole/orbit visual, which now presents the research and engineering work data-driven from `universe-data.js`.

## AI-use disclosure

AI assistance drafted this page's structure, visual CSS, project-note wording, and small JavaScript interactions. Dee supplied the portfolio and challenge brief; the initial code and wording were generated with AI. Dee should review, edit, test, and be able to explain the submitted work. This disclosure describes the current starting point and should be updated to match Dee's own edits and learning before submission.

## Credits

Built from Dee's supplied art-portfolio HTML and the Hack Club Stardance Personal Site brief. The orbital diagrams and art-inspired CSS visuals are original to this project. The font stack uses DM Sans, DM Mono, and Playfair Display when Google Fonts is available, with local system fallbacks.

## License

See [LICENSE](LICENSE).

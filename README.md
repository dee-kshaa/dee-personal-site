# DEE.EXE — An Engineer's Universe

DEE.EXE is B. Deekshaa's personal site: an evolving engineering notebook and art archive. It introduces her interests in satellite navigation, signals, embedded systems, research, and creative work. The site is designed as a small project that can be read, edited, and hosted as static files while learning web development.

## Features

- Responsive, single-page layout with About, Projects, Research, Experience, Art, Currently Exploring, and Contact sections
- Original orbital diagrams, project illustrations, star field, and artwork-inspired motifs made with SVG and CSS
- Keyboard-accessible navigation, mobile menu, expandable project notes, and reduced-motion support
- No framework, build tool, or runtime dependency

## Technologies

- Semantic HTML5
- Custom CSS3 for layout, typography, responsiveness, diagrams, and motion
- Vanilla JavaScript for the mobile menu, footer year, and back-to-top control

## Files

```text
personal-site/
├── index.html
├── style.css
├── script.js
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

1. Push these files to the `main` branch of the public `dee-personal-site` repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for the Pages deployment to finish. Open its published URL and check it at desktop and mobile widths.

## Content to verify and personalize

The GitHub and LinkedIn links point to Dee's profiles. No public email address was supplied, so Email remains a visible placeholder. Before submission, verify all project descriptions and experience entries against original records. In particular, add the exact details for the NMIC '26 review-paper status and the rover's actual hardware/network version. No measurements, rankings, publication identifiers, or GitHub project repositories are claimed here.

The source art portfolio included titles for eight works but used empty gallery placeholders rather than the artwork images. The Art section preserves those titles and uses original CSS motifs as stand-ins. Replace the motifs with the original artwork files when available.

## AI-use disclosure

AI assistance drafted this page's structure, visual CSS, project-note wording, and small JavaScript interactions. Dee supplied the portfolio and challenge brief; the initial code and wording were generated with AI. Dee should review, edit, test, and be able to explain the submitted work. This disclosure describes the current starting point and should be updated to match Dee's own edits and learning before submission.

## Credits

Built from Dee's supplied art-portfolio HTML and the Hack Club Stardance Personal Site brief. The orbital diagrams and art-inspired CSS visuals are original to this project. The font stack uses DM Sans, DM Mono, and Playfair Display when Google Fonts is available, with local system fallbacks.

## License

See [LICENSE](LICENSE).

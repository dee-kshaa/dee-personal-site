# DEE.EXE — An Engineer's Universe

DEE.EXE is a static, single-page engineering portfolio focused on navigation, communications, embedded systems, research, and software projects.

## Features

- Responsive About, Projects & Research, Currently Exploring, and Contact sections
- A black-hole-centered project/research scene with three orbital categories and a gently drifting shared assembly
- A framed cinematic landing hero in the existing cyan-violet palette
- Keyboard-operable satellite buttons, visible focus and hover identification, and a native detail dialog with status, contribution, technologies, source notes, and verified links where available
- Nova, an original draggable space companion that docks in a chosen screen corner, remembers its position, shares randomized research facts, and supports keyboard corner controls
- Responsive mobile navigation and explicit reduced-motion support
- No framework, build tool, or runtime dependency

## Technologies

- Semantic HTML5
- Custom responsive CSS with reduced-motion handling
- Vanilla JavaScript for navigation, orbital positions and animation, entry details, footer year, and back-to-top control

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

Open `index.html` directly, or run a static server from this folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Projects & Research content

`universe-data.js` is the single content source for the research, project, and repository satellites. Every button opens the same accessible detail dialog. The SVG/CSS black hole, its orbit guides, and the satellites share one responsive assembly, so the central visual drifts as a unit while the data-driven satellites continue along their calculated ellipses. Reduced-motion preferences stop both movements.

Content was checked against the supplied Research CV, Core ECE resume, GAGAN internship report, research manuscripts, GitHub repository audit, and the local SafeIntern-AI repository. The two papers are marked accepted according to the supplied CV/resume; the UV-C paper is marked orally presented as stated there. ResearchGate links were checked against the matching paper titles. Repository visibility could not be verified in this environment, so direct repository URLs are withheld to avoid exposing a private destination.

The rover entry uses the resume-described SIM8202G-M2 build and records the conflicting modem mentions in the manuscript and repository audit as unconfirmed version mapping. The GAGAN project names Flask, OpenPyXL, PyWebView, Excel, and authentication; it does not claim Tkinter or include operational data. TransitOps is identified as a team/fork contribution limited to the documented ChromaDB ingestion and retrieval layer. SafeIntern-AI's AI-assisted implementation is described as designed/directed and reviewed/merged rather than wholly hand-coded. The claim-review evidence system is presented as a documentation contribution only because implementation authorship is unverified.

The GitHub audit did not support featuring the current JARVIS repository as original work, and recommended holding KNACH until its implementation is verified. Those projects are therefore not shown as completed individual builds. The WhatsApp router is also omitted because the supplied audit lists its repository name but no direct destination URL was available to verify in this environment, and the brief requires a verified link. Other unverified or empty repositories are excluded. For repository entries whose source audit gave a repository name but no direct URL, the site leaves the URL unavailable instead of guessing a link.

The existing laser communication prototype remains in the orbit because it was already described in the portfolio; its detailed lab notes and results were not present among the supplied project files.

## Links and contact

The site links to the GitHub and LinkedIn profiles. No public email address was supplied, so Email remains a placeholder.

## Publishing

The configured GitHub Pages URL is <https://dee-kshaa.github.io/dee-personal-site/>. Deployment is handled through the existing repository setup; this project has no local build step.

## AI-use disclosure

AI tools have been used to assist with portions of the site structure, CSS, content wording, and JavaScript. The project and contribution descriptions are cross-checked against the supplied source documents, and AI-assisted work is identified where relevant.

## License

See [LICENSE](LICENSE).

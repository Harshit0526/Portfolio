# Harshit Srivastav — Portfolio

Personal portfolio website for Harshit Srivastav, a final-year B.Tech CSE student and Java / Spring Boot developer based in Lucknow, India.

🔗 Live site: https://harshit0526.github.io/

---

## Sections

- **Home** — intro, stack overview, resume download
- **About** — background, stats, current focus
- **Skills** — languages, backend, frontend, database, tools
- **Projects** — Viastastore (full-stack e-commerce app)
- **Education** — B.Tech CSE (AKTU), XII, X
- **Contact** — contact form powered by Web3Forms

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Scripting | Vanilla JavaScript |
| Fonts | Space Grotesk, Syne (Google Fonts) |
| Form | Web3Forms |

---

## Project Structure

```
harshit-portfolio/
├── index.html        # Main HTML file
├── style.css         # All styles
├── script.js         # JS — nav, contact form, tilt, scroll reveal
├── favicon.svg       # Site favicon
├── README.md         # This file
└── assets/
    └── HarshitResume.pdf
```

---

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com) to send messages directly to Gmail without a backend.

1. Go to https://web3forms.com
2. Enter your email and get a free access key
3. In `script.js`, replace the placeholder:

```js
var WEB3FORMS_KEY = 'your-access-key-here';
```

---

## Running Locally

No build step needed — just open `index.html` in a browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — use VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

---

## Deploying to GitHub Pages

1. Push the project to a GitHub repository named `<your-username>.github.io`
2. Go to **Settings → Pages → Source** and select the `main` branch
3. Your site will be live at `https://<your-username>.github.io/`

---

## Connect

- GitHub: [github.com/Harshit0526](https://github.com/Harshit0526)
- LinkedIn: [linkedin.com/in/harshit-srivastav-28b76a382](https://www.linkedin.com/in/harshit-srivastav-28b76a382/)
- Email: harshitsrivast1599@gmail.com

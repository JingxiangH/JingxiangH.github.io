# How to Update Your Website

Everything on the site lives in a handful of files at the repository root.
Edit the file, commit, push — GitHub Pages republishes automatically in ~1 minute.

| I want to…                          | Edit this file                                  |
| ----------------------------------- | ----------------------------------------------- |
| Add / edit a working paper          | `papers.js` (the `papers` list)                 |
| Add / edit a coursework project     | `papers.js` (the `coursework` list)             |
| Update my CV                        | replace `assets/HJX_CV.pdf` (keep the filename) |
| Change my bio, skills, or contact   | `index.html` (contact also in `cv.html`)        |
| Change my photo                     | replace `images/personal.png`                   |
| Change colors / fonts / styling     | `styles.css`                                    |

---

## 1. Add a new working paper

Open **`papers.js`**. It contains a list called `papers`. Copy an existing
block (everything from `{` to `},`), paste it **at the top of the list**
(papers display in the order they appear), and edit the fields:

```js
{
  title: "My Amazing New Paper",
  status: "Working Paper",            // badge text: "In Progress", "Working Paper", etc.
  period: "Jan 2026 – present",
  people: 'with <a href="https://coauthor-site.com">Coauthor Name</a> (Their University)',
  description: "One to four sentences describing the paper.",
  pdf: "assets/my-new-paper.pdf",     // or null if there is no PDF yet
  pdfLabel: "PDF",                    // optional button text, e.g. "Slides" or "Report"
  note: "Optional award or highlight line",   // or null
},
```

Notes:
- If the paper has a PDF, drop the PDF file into the `assets/` folder first,
  then set `pdf: "assets/your-file.pdf"`.
- `people` and `description` may contain `<a href="...">links</a>`.
- Don't forget the comma after the closing `}` of each block.
- The badge color is picked automatically from the `status` text
  ("In Progress" = amber, "Working Paper" = vermillion red, "Writing Sample" =
  teal green, anything else = grey).
- The **Coursework** section works exactly the same way — it is the second
  list (`coursework`) further down in `papers.js`.
- After any content change, also bump the visible "Last updated …" date in
  the footer — it is near the bottom of **both** `index.html` and `cv.html`
  (search for `Last updated`).

## 2. Update your CV

Replace the file **`assets/HJX_CV.pdf`** with your new CV, **keeping the same
filename**. That's it — both the embedded viewer on the CV page and the
"Download CV" buttons point at that file.

(If you must change the filename, search for `HJX_CV.pdf` in `cv.html` and
`index.html` and update the paths.)

## 3. Edit your bio / contact info

Open **`index.html`** and look for the comment markers — the editable text is
fenced so it's easy to find:

- `<!-- EDIT: intro -->` — the headline and short bio paragraph
- `<!-- EDIT: facts -->` — education, languages, skills, interests
- `<!-- EDIT: contact -->` — email addresses and GitHub link (appears in the
  hero and again in the footer)

Heads-up: the footer contact block is **duplicated in `cv.html`** (also marked
`<!-- EDIT: contact -->`), and your email appears once more in the small-screen
download panel of `cv.html` — if your contact details change, update those too.

## 4. Preview before publishing

Just open `index.html` in your browser (double-click it) — the site is plain
HTML/CSS and needs no build step or server.

## 5. Going back to the old website

The complete previous (Jekyll) site is preserved in **`old-website-backup/`**.
Follow the steps in `old-website-backup/README_BACKUP.md` to restore it.
Git history also retains every prior version.

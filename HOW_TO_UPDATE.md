# How to Update Your Website

Everything on the site lives in a handful of files at the repository root.
Edit the file, commit, push — GitHub Pages republishes automatically in ~1 minute.

| I want to…                            | Edit this file                                  |
| ------------------------------------- | ----------------------------------------------- |
| Add / edit / unhide a working paper   | `papers.js`                                     |
| Update my CV                          | replace `assets/HJX_CV.pdf` (keep the filename) |
| Change my bio or contact links        | `index.html`                                    |
| Change my photo                       | replace `images/portrait.jpg`                   |
| Change colors / fonts / styling       | `styles.css`                                    |

---

## 1. Add a new working paper

Open **`papers.js`**. It contains a list called `papers`. Copy an existing
block (everything from `{` to `},`), paste it **at the top of the list**
(papers display in the order they appear), and edit the fields:

```js
{
  title: "My Amazing New Paper",
  status: "Working Paper",            // for your records only — not shown on the site
  period: null,                       // optional date range, shown after the coauthors
  people: 'with <a href="https://coauthor-site.com">Coauthor Name</a> (Their University)',
  description: "One to four sentences describing the paper.",
  pdf: "assets/my-new-paper.pdf",     // or null if there is no PDF yet
  pdfLabel: "pdf",                    // optional [link] text, e.g. "slides" or "report"
  note: null,                         // optional extra line (e.g. an award)
},
```

Notes:
- If the paper has a PDF, drop the PDF file into the `assets/` folder first,
  then set `pdf: "assets/your-file.pdf"`. The title becomes a link and a
  small `[pdf]` link appears under the entry. With `pdf: null`, the entry
  shows an italic "Draft in preparation." line instead.
- `people` and `description` may contain `<a href="...">links</a>`.
- Don't forget the comma after the closing `}` of each block.

## 2. Hide or unhide a paper

Your undergraduate projects are still in `papers.js`, each marked with
`hidden: true`. **Delete that line (or set it to `false`) to put one back on
the site.** Add `hidden: true` to any entry to take it off the site without
deleting it.

The second list in the file, `coursework`, works the same way — its
"Coursework" section automatically appears on the page as soon as at least
one entry in it is not hidden.

## 3. Update your CV

Replace the file **`assets/HJX_CV.pdf`** with your new CV, **keeping the same
filename**. Both the embedded viewer on the CV page and every CV link point
at that file.

## 4. Edit your bio / contact info

Open **`index.html`** and look for the comment markers:

- `<!-- EDIT: intro -->` — your name and the two short bio paragraphs
- `<!-- EDIT: contact -->` — the email / GitHub / CV links under your photo

## 5. Housekeeping when you change things

- Update the visible "Last updated …" line at the bottom of **both**
  `index.html` and `cv.html` (search for `Last updated`).
- New photo? Save it as a square ~300×300 JPEG at `images/portrait.jpg`
  (small files keep the page fast).

## 6. Preview before publishing

Just open `index.html` in your browser (double-click it) — the site is plain
HTML/CSS and needs no build step or server.

## 7. Going back to the old website

The complete previous (Jekyll) site is preserved in **`old-website-backup/`**.
Follow the steps in `old-website-backup/README_BACKUP.md` to restore it.
Git history also retains every prior version, including the intermediate
redesigns (the "Offprint" design and Plans A/B/C).

# Old Website Backup (Jekyll / Academic Pages)

This folder is a **complete copy** of the previous version of the website
(the Jekyll "Academic Pages" template), saved on 2026-06-12 before the redesign.
Nothing was deleted — everything the old site needed is in here.

## How to restore the old website

If you ever want to go back to the old design:

1. Delete the new site files from the repository root:
   `index.html`, `cv.html`, `404.html`, `styles.css`, `main.js`, `papers.js`,
   `.nojekyll`, `HOW_TO_UPDATE.md`, and the `cv/` folder
2. Copy **everything inside this folder** (except this README_BACKUP.md)
   back into the repository root, replacing what is there.
3. Commit and push. GitHub Pages will rebuild the old Jekyll site automatically.

Tip: the full history is also in git, so `git log` / `git revert` can always
bring back any previous state even without this folder.

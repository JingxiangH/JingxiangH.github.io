/* Renders the paper lists from papers.js as plain, quiet rows:
   title / coauthor line / description / [pdf] link.
   You should not need to edit this file to update site content. */

function renderQuietList(items, listId, opts) {
  opts = opts || {};
  var list = document.getElementById(listId);
  if (!list || !items) return;

  items = items.filter(function (p) { return !p.hidden; });

  // hide the whole section when every entry is hidden
  var section = list.closest ? list.closest("section") : null;
  if (section) section.style.display = items.length ? "" : "none";
  if (!items.length) return;

  items.forEach(function (paper) {
    var li = document.createElement("li");
    li.className = "paper-row";

    var title = document.createElement("p");
    title.className = "paper-title";
    if (paper.pdf) {
      var titleLink = document.createElement("a");
      titleLink.href = paper.pdf;
      titleLink.textContent = paper.title;
      title.appendChild(titleLink);
    } else {
      title.textContent = paper.title;
    }
    li.appendChild(title);

    var metaParts = [];
    if (paper.people) metaParts.push(paper.people);
    if (paper.period) metaParts.push(paper.period);
    if (metaParts.length) {
      var people = document.createElement("p");
      people.className = "paper-people";
      people.innerHTML = metaParts.join(", "); // may contain links, set in papers.js
      li.appendChild(people);
    }

    if (paper.description) {
      var desc = document.createElement("p");
      desc.className = "paper-desc";
      desc.innerHTML = paper.description; // may contain links, set in papers.js
      li.appendChild(desc);
    }

    if (paper.note) {
      var note = document.createElement("p");
      note.className = "paper-note";
      note.textContent = paper.note;
      li.appendChild(note);
    }

    var actions = document.createElement("p");
    actions.className = "paper-actions";
    if (paper.pdf) {
      var label = (paper.pdfLabel || "pdf").toLowerCase();
      actions.appendChild(document.createTextNode("["));
      var pdfLink = document.createElement("a");
      pdfLink.href = paper.pdf;
      pdfLink.textContent = label;
      actions.appendChild(pdfLink);
      actions.appendChild(document.createTextNode("]"));
      li.appendChild(actions);
    } else if (opts.draftNote) {
      actions.className = "paper-draft-note";
      actions.textContent = opts.draftNote;
      li.appendChild(actions);
    }

    list.appendChild(li);
  });
}

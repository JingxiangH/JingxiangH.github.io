/* Renders the paper list from papers.js and wires up small page
   behaviors (sticky-nav border, scroll-spy, reveal animations).
   You should not need to edit this file to update site content. */

document.documentElement.classList.add("js");

/* ---- render papers + coursework (index page only) ---- */
function renderEntryList(items, listId, countId) {
  var list = document.getElementById(listId);
  if (!list || !items) return;

  items = items.filter(function (p) { return !p.hidden; });

  // hide the whole section when every entry is hidden
  var section = list.closest ? list.closest("section") : null;
  if (section) section.style.display = items.length ? "" : "none";
  if (!items.length) return;

  function badgeClass(status) {
    var s = (status || "").toLowerCase();
    if (s.indexOf("progress") !== -1) return "badge-in-progress";
    if (s.indexOf("working") !== -1) return "badge-working-paper";
    if (s.indexOf("sample") !== -1) return "badge-writing-sample";
    return "badge-neutral";
  }

  items.forEach(function (paper, i) {
    var li = document.createElement("li");
    li.className = "paper-row reveal";

    var numeral = document.createElement("div");
    numeral.className = "paper-numeral";
    numeral.setAttribute("aria-hidden", "true");
    numeral.textContent = String(i + 1).padStart(2, "0");
    li.appendChild(numeral);

    var content = document.createElement("div");

    var meta = document.createElement("div");
    meta.className = "paper-meta";
    if (paper.status) {
      var badge = document.createElement("span");
      badge.className = "badge " + badgeClass(paper.status);
      if (badgeClass(paper.status) === "badge-in-progress") {
        var dot = document.createElement("span");
        dot.className = "dot";
        badge.appendChild(dot);
      }
      badge.appendChild(document.createTextNode(paper.status));
      meta.appendChild(badge);
    }
    if (paper.period) {
      var period = document.createElement("span");
      period.className = "paper-period";
      period.textContent = paper.period;
      meta.appendChild(period);
    }
    content.appendChild(meta);

    var title = document.createElement("h3");
    title.className = "paper-title";
    if (paper.pdf) {
      var titleLink = document.createElement("a");
      titleLink.href = paper.pdf;
      titleLink.target = "_blank";
      titleLink.rel = "noopener";
      titleLink.textContent = paper.title;
      title.appendChild(titleLink);
    } else {
      title.textContent = paper.title;
    }
    content.appendChild(title);

    if (paper.people) {
      var people = document.createElement("p");
      people.className = "paper-people";
      people.innerHTML = paper.people; // may contain links, set in papers.js
      content.appendChild(people);
    }

    if (paper.description) {
      var desc = document.createElement("p");
      desc.className = "paper-desc";
      desc.innerHTML = paper.description; // may contain links, set in papers.js
      content.appendChild(desc);
    }

    if (paper.note) {
      var note = document.createElement("p");
      note.className = "paper-note";
      note.textContent = paper.note;
      content.appendChild(note);
    }

    if (paper.pdf) {
      var actions = document.createElement("p");
      actions.className = "paper-actions";
      var pdfLink = document.createElement("a");
      pdfLink.href = paper.pdf;
      pdfLink.target = "_blank";
      pdfLink.rel = "noopener";
      pdfLink.innerHTML = (paper.pdfLabel || "PDF") + "&nbsp;&#8595;";
      actions.appendChild(pdfLink);
      content.appendChild(actions);
    }

    li.appendChild(content);
    list.appendChild(li);
  });

  var count = document.getElementById(countId);
  if (count) {
    count.textContent =
      items.length + (items.length === 1 ? " entry" : " entries");
  }
}

if (typeof papers !== "undefined") {
  renderEntryList(papers, "paper-list", "paper-count");
}
if (typeof coursework !== "undefined") {
  renderEntryList(coursework, "coursework-list", "coursework-count");
}

/* ---- sticky nav hairline ---- */
(function navBorder() {
  var topbar = document.getElementById("topbar");
  if (!topbar) return;
  function update() {
    topbar.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
})();

/* ---- reveal-on-scroll + nav scroll-spy ---- */
(function observers() {
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { revealObserver.observe(el); });

    var spyLinks = document.querySelectorAll(".nav-links a[data-spy]");
    if (spyLinks.length) {
      var sections = [];
      spyLinks.forEach(function (link) {
        var section = document.getElementById(link.getAttribute("data-spy"));
        if (section) sections.push({ section: section, link: link });
      });
      var spyObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            sections.forEach(function (item) {
              item.link.classList.toggle(
                "active",
                item.section === entry.target
              );
            });
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      sections.forEach(function (item) { spyObserver.observe(item.section); });
    }
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();

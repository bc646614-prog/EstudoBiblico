/**
 * App de Ebooks - Estudos Bíblicos para Pregação
 */

let currentBook = null;
let currentChapter = 0;
let fontSize = 1.125; // rem

// Metadados extras para os cards (capa, número, descrição)
const BOOK_META = {
  salvacao: {
    number: "01",
    coverClass: "cover-salvacao",
    desc: "O plano de Deus para resgatar o homem perdido. Graça, fé e a obra de Cristo na cruz."
  },
  arrependimento: {
    number: "02",
    coverClass: "cover-arrependimento",
    desc: "O primeiro grito do evangelho. Mudança de mente, direção e frutos dignos de arrependimento."
  },
  espirito: {
    number: "03",
    coverClass: "cover-espirito",
    desc: "A Pessoa do Espírito Santo, o batismo no Espírito e a vida cheia do Espírito."
  },
  poder: {
    number: "04",
    coverClass: "cover-poder",
    desc: "Revestidos de poder do alto. Sinais, milagres e capacitação para ser testemunha."
  },
  avivamento: {
    number: "05",
    coverClass: "cover-avivamento",
    desc: "Como buscar e reconhecer o avivamento. Humilhação, oração e o derramar do Espírito."
  },
  arrebatamento: {
    number: "06",
    coverClass: "cover-arrebatamento",
    desc: "A volta de Jesus, o arrebatamento da igreja e os sinais dos tempos."
  },
  dons: {
    number: "07",
    coverClass: "cover-dons",
    desc: "Diversidade, unidade e propósito dos dons do Espírito para a edificação da igreja."
  },
  batalha: {
    number: "08",
    coverClass: "cover-batalha",
    desc: "A armadura de Deus, a natureza da batalha espiritual e a liberdade em Cristo."
  },
  isca: {
    number: "09",
    coverClass: "cover-isca",
    desc: "Ofensa, amargura e perdão. Como não engolir a isca de Satanás e viver livre."
  },
  "poder-toque": {
    number: "10",
    coverClass: "cover-toque",
    desc: "Livro completo de Mahesh Chavda. A unção de Deus para curar e o poder do toque daqueles que creem."
  },
  "isca-satanas": {
    number: "11",
    coverClass: "cover-isca-livro",
    desc: "Livro completo de John Bevere. Como enfrentar e vencer a ofensa, a armadilha mais enganosa do inimigo."
  }
};

// Ordem de exibição
const BOOK_ORDER = [
  "salvacao",
  "arrependimento",
  "espirito",
  "poder",
  "avivamento",
  "arrebatamento",
  "dons",
  "batalha",
  "isca",
  "poder-toque",
  "isca-satanas"
];

document.addEventListener("DOMContentLoaded", () => {
  renderBookCards();

  // Restaurar tema
  const savedTheme = localStorage.getItem("ebook-theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Restaurar tamanho da fonte
  const savedSize = localStorage.getItem("ebook-font-size");
  if (savedSize) {
    fontSize = parseFloat(savedSize);
    document.documentElement.style.setProperty("--reader-font-size", fontSize + "rem");
  }

  // Teclas de atalho
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("reader").classList.contains("active")) return;
    if (e.key === "ArrowLeft") prevChapter();
    if (e.key === "ArrowRight") nextChapter();
    if (e.key === "Escape") closeBook();
  });
});

function renderBookCards() {
  const grid = document.getElementById("books-grid");
  if (!grid) return;

  grid.innerHTML = BOOK_ORDER.map((id) => {
    const book = BOOKS[id];
    const meta = BOOK_META[id] || {};
    if (!book) return "";

    return `
      <article class="book-card" data-book="${id}">
        <div class="book-cover ${meta.coverClass || "cover-dons"}">
          <span class="book-number">${meta.number || ""}</span>
          <h2>${book.title}</h2>
          <p>${book.subtitle}</p>
        </div>
        <div class="book-info">
          <p>${meta.desc || ""}</p>
          <button class="btn-read" onclick="openBook('${id}')">Ler Ebook</button>
        </div>
      </article>
    `;
  }).join("");
}

function openBook(bookId) {
  currentBook = BOOKS[bookId];
  if (!currentBook) return;

  currentChapter = 0;
  document.getElementById("home").classList.remove("active");
  document.getElementById("reader").classList.add("active");
  document.getElementById("reader-title").textContent = currentBook.title;

  renderChapter();
  window.scrollTo(0, 0);
}

function closeBook() {
  document.getElementById("reader").classList.remove("active");
  document.getElementById("home").classList.add("active");
  currentBook = null;
  currentChapter = 0;
}

function renderChapter() {
  if (!currentBook) return;

  const chapter = currentBook.chapters[currentChapter];
  const contentEl = document.getElementById("reader-content");
  contentEl.innerHTML = chapter.content;
  contentEl.scrollTop = 0;

  const total = currentBook.chapters.length;
  document.getElementById("chapter-indicator").textContent = `${currentChapter + 1} / ${total}`;

  document.getElementById("btn-prev").disabled = currentChapter === 0;
  document.getElementById("btn-next").disabled = currentChapter === total - 1;

  updateProgressBar(currentChapter / (total - 1 || 1));
}

function nextChapter() {
  if (!currentBook || currentChapter >= currentBook.chapters.length - 1) return;
  currentChapter++;
  renderChapter();
}

function prevChapter() {
  if (!currentBook || currentChapter <= 0) return;
  currentChapter--;
  renderChapter();
}

function updateProgressBar(ratio) {
  const fill = document.getElementById("progress");
  if (fill) {
    fill.style.width = Math.min(100, Math.max(0, ratio * 100)) + "%";
  }
}

function changeFontSize(delta) {
  fontSize = Math.min(1.6, Math.max(0.9, fontSize + delta * 0.1));
  document.documentElement.style.setProperty("--reader-font-size", fontSize + "rem");
  localStorage.setItem("ebook-font-size", fontSize);
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  if (isDark) {
    html.removeAttribute("data-theme");
    localStorage.setItem("ebook-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("ebook-theme", "dark");
  }
}

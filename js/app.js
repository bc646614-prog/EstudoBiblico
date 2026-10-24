/**
 * App de Ebooks - Estudos Bíblicos
 */

let currentBook = null;
let currentChapter = 0;
let fontSize = 1.125; // rem

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Restaurar tema
  const savedTheme = localStorage.getItem('ebook-theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Restaurar tamanho da fonte
  const savedSize = localStorage.getItem('ebook-font-size');
  if (savedSize) {
    fontSize = parseFloat(savedSize);
    document.documentElement.style.setProperty('--reader-font-size', fontSize + 'rem');
  }

  // Progresso de leitura
  const content = document.getElementById('reader-content');
  if (content) {
    content.addEventListener('scroll', updateProgress);
  }

  // Teclas de atalho
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('reader').classList.contains('active')) return;
    if (e.key === 'ArrowLeft') prevChapter();
    if (e.key === 'ArrowRight') nextChapter();
    if (e.key === 'Escape') closeBook();
  });
});

function openBook(bookId) {
  currentBook = BOOKS[bookId];
  if (!currentBook) return;

  currentChapter = 0;
  document.getElementById('home').classList.remove('active');
  document.getElementById('reader').classList.add('active');
  document.getElementById('reader-title').textContent = currentBook.title;

  renderChapter();
  window.scrollTo(0, 0);
}

function closeBook() {
  document.getElementById('reader').classList.remove('active');
  document.getElementById('home').classList.add('active');
  currentBook = null;
  currentChapter = 0;
}

function renderChapter() {
  if (!currentBook) return;

  const chapter = currentBook.chapters[currentChapter];
  const contentEl = document.getElementById('reader-content');
  contentEl.innerHTML = chapter.content;
  contentEl.scrollTop = 0;

  // Atualizar indicador
  const total = currentBook.chapters.length;
  document.getElementById('chapter-indicator').textContent = `${currentChapter + 1} / ${total}`;

  // Botões
  document.getElementById('btn-prev').disabled = currentChapter === 0;
  document.getElementById('btn-next').disabled = currentChapter === total - 1;

  // Progresso geral do livro
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

function updateProgress() {
  const el = document.getElementById('reader-content');
  if (!el) return;
  const scrollTop = el.scrollTop;
  const scrollHeight = el.scrollHeight - el.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  // Progresso do capítulo atual (opcional - aqui usamos o progresso do livro)
}

function updateProgressBar(ratio) {
  const fill = document.getElementById('progress');
  if (fill) {
    fill.style.width = Math.min(100, Math.max(0, ratio * 100)) + '%';
  }
}

function changeFontSize(delta) {
  fontSize = Math.min(1.6, Math.max(0.9, fontSize + delta * 0.1));
  document.documentElement.style.setProperty('--reader-font-size', fontSize + 'rem');
  localStorage.setItem('ebook-font-size', fontSize);
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('ebook-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('ebook-theme', 'dark');
  }
}

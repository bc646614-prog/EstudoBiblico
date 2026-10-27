# -*- coding: utf-8 -*-
"""
Construtor dos livros completos a partir dos PDFs.

Pipeline:
  1. Extrair o Markdown dos PDFs com pymupdf4llm:
       import pymupdf4llm
       open(".tools/mahesh.md", "w").write(pymupdf4llm.to_markdown("caminho/do/pdf/mahesh.pdf"))
       open(".tools/isca.md", "w").write(pymupdf4llm.to_markdown("caminho/do/pdf/isca.pdf"))
  2. Rodar:  python .tools/build_books.py

Entrada:
  .tools/mahesh.md  -> "O Poder Secreto do Toque Daqueles que Creem" (Mahesh Chavda)
  .tools/isca.md    -> "A Isca de Satanás" (John Bevere)

Saída:
  js/books-extra.js  -> Object.assign(BOOKS, {...}) consumido pelo app
"""
import json
import re

HERE = "/home/user/EstudoBiblico/.tools"
OUT = "/home/user/EstudoBiblico/js/books-extra.js"

# ---------------------------------------------------------------- helpers
STOPWORDS = {
    "a", "o", "as", "os", "de", "do", "da", "dos", "das", "em", "no", "na",
    "nos", "nas", "um", "uma", "uns", "umas", "e", "que", "com", "para",
    "por", "como", "mais", "ao", "à", "às", "se", "ou", "ser", "ter", "ver",
    "vir", "ir", "mas", "nem", "já", "pra", "prá", "em", "sem", "sob",
}


def title_case(text):
    """Capitaliza títulos em português, mantendo artigos/preposições em minúscula."""
    words = text.split()
    out = []
    force_next = True  # primeira palavra sempre capitalizada
    for w in words:
        lw = w.lower()
        if force_next or lw not in STOPWORDS:
            out.append(w[:1].upper() + w[1:].lower())
        else:
            out.append(lw)
        # após número do capítulo ("2.") ou dois-pontos, força capitalização
        force_next = bool(re.fullmatch(r"\d+\.", w)) or w.endswith(":")
    return " ".join(out)


def clean_heading(line):
    """Remove marcadores markdown de uma linha de cabeçalho."""
    t = re.sub(r"^#{1,6}\s*", "", line).strip()
    t = re.sub(r"<sup>(.*?)</sup>", r"\1", t, flags=re.S)
    t = t.replace("<u>", "").replace("</u>", "")
    t = t.replace("**", "").replace("~~", "")
    t = t.replace("_", "")
    t = re.sub(r"\s+", " ", t).strip()
    t = re.sub(r"^(\d+)\s*\.\s*", r"\1. ", t)
    return t


SUP_OPEN = "\x00SO"
SUP_CLOSE = "\x00SC"


def inline(text):
    """Converte markdown inline (_ ** ~~ <u> <sup>) em HTML seguro."""
    # mantém <sup> apenas para marcadores numéricos (notas de rodapé);
    # qualquer outro conteúdo (pontuação, fragmentos corrompidos) é nivelado
    text = re.sub(
        r"<sup>([^<]*)</sup>",
        lambda m: m.group(0) if re.fullmatch(r"\d+", m.group(1)) else m.group(1),
        text,
    )
    # proteger <sup>
    text = re.sub(r"<sup>(.*?)</sup>",
                  lambda m: SUP_OPEN + m.group(1) + SUP_CLOSE, text, flags=re.S)
    text = text.replace("<u>", "").replace("</u>", "")
    text = re.sub(r"~~(.*?)~~", r"\1", text, flags=re.S)
    # trechos entre crases são falas citadas
    text = re.sub(r"`([^`]+)`", r"“\1”", text)
    # escape de HTML
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    # negrito+itálico, negrito, itálico
    text = re.sub(r"\*\*_(.+?)_\*\*", r"<strong><em>\1</em></strong>", text, flags=re.S)
    text = re.sub(r"_\*\*(.+?)\*\*_", r"<em><strong>\1</strong></em>", text, flags=re.S)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text, flags=re.S)
    text = re.sub(r"(?<![\w])_(.+?)_(?![\w])", r"<em>\1</em>", text, flags=re.S)
    # marcadores restantes são ruído do PDF de origem
    text = text.replace("**", "").replace("_", "").replace("`", "'")
    # restaurar sup
    text = text.replace(SUP_OPEN, "<sup>").replace(SUP_CLOSE, "</sup>")
    return text


CLITIC = {
    "me", "te", "se", "o", "a", "os", "as", "lo", "la", "los", "las", "lhe",
    "lhes", "nos", "vos", "mo", "ma", "mos", "mas", "to", "ta", "tos", "tas",
    "lho", "lha", "lhos", "lhas", "mi", "ti", "si",
}
# prefixos de compostos lexicais genuínos
COMPOUND_PREFIX = {
    "não", "ex", "pré", "pós", "pró", "recém", "auto", "semi", "sobre",
    "super", "hiper", "anti", "além", "bem", "mal", "meio", "porta", "sub",
    "vice", "micro", "macro", "mini", "pré", "pós",
}
PROTECTED_HYPHEN = {
    "princípio-chave", "princípios-chaves", "raios-x", "meio-dia", "porta-voz",
    "jeová-rafá", "jeová-jiré", "bem-aventurados", "anti-semitismo",
    "não-convencional", "pré-cirúrgico", "pré-estudante", "recém-nascido",
    "além-mar", "mal-entendido", "ex-marido", "bate-seba",
}
HYPHEN_FIX = {"autoesti-ma": "autoestima"}


def join_hyphens(text):
    """Une quebras de palavra por hífen, preservando pronomes átonos e compostos."""
    for bad, good in HYPHEN_FIX.items():
        text = text.replace(bad, good)

    # hífen com espaço: quebra de linha no PDF
    def repl_spaced(m):
        a, b = m.group(1), m.group(2)
        if b.lower() in CLITIC:
            return a + "-" + b           # refrescou- lhes -> refrescou-lhes
        if b[:1].isupper():
            return a + ". " + b          # fim de frase
        if b.lower() in STOPWORDS:
            return a + " " + b           # diante- de -> diante de
        return a + b                     # reconhe- cer -> reconhecer

    text = re.sub(r"([A-Za-zÀ-ÿ]+)-\s+([A-Za-zÀ-ÿ]+)", repl_spaced, text)

    def repl(m):
        token = m.group(0)
        if token.lower() in PROTECTED_HYPHEN:
            return token
        a, b = token.split("-", 1)
        if b.lower() in CLITIC:
            return token
        if b[:1].isupper():  # compostos com nome próprio (raios-X, Jeová-Rafá)
            return token
        if a.lower() in COMPOUND_PREFIX:
            return token
        return a + b

    return re.sub(r"[A-Za-zÀ-ÿ]+-[A-Za-zÀ-ÿ]+", repl, text)


def normalize(text):
    text = text.replace("\xa0", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r" ?\n ?", " ", text)
    text = re.sub(r"\s+([.,;:!?])", r"\1", text)
    return text.strip()


TERMINAL = set(".!?;:”’\")")


def merge_fragments(blocks):
    """Une parágrafos partidos por quebra de página (continuação sem ponto final)."""
    merged = []
    for kind, text in blocks:
        if kind == "p" and merged and merged[-1][0] == "p":
            prev = merged[-1][1]
            if prev and prev[-1] not in TERMINAL and text[:1].islower():
                merged[-1] = ("p", prev + " " + text)
                continue
        merged.append((kind, text))
    return merged


def is_all_caps(s):
    letters = [c for c in s if c.isalpha()]
    return (
        len(letters) >= 4
        and 4 <= len(s) <= 78
        and not s.endswith(".")
        and sum(1 for c in letters if c.isupper()) / len(letters) > 0.6
    )


# ================================================================= MAHESH
MAHESH_SECTIONS = {
    "apresentação": ("Apresentação", "front"),
    "dedicatória": ("Dedicatória", "front"),
    "agradecimentos": ("Agradecimentos", "front"),
    "introdução": ("Introdução", "front"),
    "o senhor que nos cura": ("Capítulo 1 — O Senhor que Nos Cura", "cap"),
    "o poder do evangelho": ("Capítulo 2 — O Poder do Evangelho", "cap"),
    "0 propósito do peniecostes":
        ("Capítulo 3 — O Propósito do Pentecostes", "cap"),
    "a autoridade para curar": ("Capítulo 4 — A Autoridade para Curar", "cap"),
    "recebendo e mantendo a unção do senhor":
        ("Capítulo 5 — Recebendo e Mantendo a Unção do Senhor", "cap"),
    "entrando na dimensão do milagre":
        ("Capítulo 6 — Entrando na Dimensão do Milagre", "cap"),
    "desenvolvimendo ministérios de cura":
        ("Capítulo 7 — Desenvolvendo Ministérios de Cura", "cap"),
    "quebrando o jogo do inimigo":
        ("Capítulo 8 — Quebrando o Jogo do Inimigo", "cap"),
    "transformando a água amarga em doce":
        ("Capítulo 9 — Transformando a Água Amarga em Doce", "cap"),
    "obedecendo à nossa visão celestial":
        ("Capítulo 10 — Obedecendo à Nossa Visão Celestial", "cap"),
}

MAHESH_REPLACES = [
    ("personificada i m Seu", "personificada em Seu"),
    ("Deus > lerramou", "Deus derramou"),
    ("lazer bem", "fazer bem"),
    ("naÁfri-i a", "na África"),
    ("naÁfrii a", "na África"),
    ("af ricana", "africana"),
    ("d agua", "d'água"),
    ("inco mil anos", "Cinco mil anos"),
    ("nu*,", "nos,"),
    ("rnedula", "medula"),
    ("Plumonary", "Pulmonary"),
    ("Desenvolvimendo", "Desenvolvendo"),
    ("assUnto", "assunto"),
    ("impoitante", "importante"),
    ("sinais ç maravilhas", "sinais e maravilhas"),
    ("palavras de Jell", "palavras de Jesus"),
    ("e • onsolador", "e o Consolador"),
    ("para ibra", "para fora"),
    ("m.mln", "manto"),
    ("rigorosnimmU", "rigorosamente"),
    ("cuimu mentos", "ensinamentos"),
    ("transfor mado", "transformado"),
    ("c suave", "é suave"),
    ("conta a correnteza", "contra a correnteza"),
    ("la dos", "lados"),
    ("for ma ", "forma "),
    ("pes soas", "pessoas"),
    ("avan çado", "avançado"),
    ("reconstmn", "reconstruir"),
    ("impa» tu", "impacto"),
    ("pan ialmente", "parcialmente"),
    ("cau sa", "causa"),
    ("mpínto", "Espírito"),
    ("ailment:aü do", "alimentando-o"),
    ("TOMB CUIDADO", "TOME CUIDADO"),
    ("COPO DÁGUA", "COPO D'ÁGUA"),
    ("PRINCÍPIO-CHAVEN", "PRINCÍPIO-CHAVE N"),
    ("Mi ido, porém, vier", "Mas, quando vier"),
    ("Mulussh Chavda, lhe Hidden Power", "Mahesh Chavda, The Hidden Power"),
    ("Df.tiny Image", "Destiny Image"),
    ("problelTias", "problemas"),
    ("iniportanc ia", "importância"),
    ("Jlisvs Nos Delegou", "Jesus Nos Delegou"),
    ("conqdata", "completa"),
    ("verdadeiraITiente", "verdadeiramente"),
    ("comes.u!", "começar."),
    (" 4que ", " que "),
    (" 4ue ", " que "),
    ("conqdeta", "completa"),
    ("igre ja", "igreja"),
    ("ITVI cal", "espinhal"),
]

# linhas inteiras que são restos do sumário (TOC corrompido)
MAHESH_DROP_LINES = {
    "desenvolvendo ministérios de cura",
}


def mahesh_fixes(text):
    # glifos corrompidos no PDF de origem (nunca aparecem em prosa válida)
    text = text.replace("\\", "").replace("■", "").replace("»", "")
    text = text.replace("«", "").replace("|", "")
    text = re.sub(r"\s•\s", " ", text)
    # nivela <sup> não numéricos antes das correções textuais
    text = re.sub(
        r"<sup>([^<]*)</sup>",
        lambda m: m.group(0) if re.fullmatch(r"\d+", m.group(1)) else m.group(1),
        text,
    )
    text = re.sub(r"\s+", " ", text)
    text = join_hyphens(text)
    text = re.sub(r"\bile\b", "de", text)
    for bad, good in MAHESH_REPLACES:
        text = text.replace(bad, good)
    return text


def build_mahesh():
    raw = open(f"{HERE}/mahesh.md", encoding="utf-8").read()
    lines = raw.split("\n")

    # começa na Apresentação
    start = next(i for i, ln in enumerate(lines) if ln.startswith("## Apresentação"))
    lines = lines[start:]

    chapters = []  # (title, part_label, [blocks])
    current = None
    part_label = None
    pending_part = None

    def new_chapter(title, part=None):
        return [title, part, []]

    i = 0
    while i < len(lines):
        ln = lines[i].rstrip()
        s = ln.strip()
        i += 1

        if not s:
            continue

        # cabeçalhos
        if s.startswith("#"):
            level = len(s) - len(s.lstrip("#"))
            text = clean_heading(s)
            low = text.lower()

            if level == 2:
                if low in ("parte i",):
                    pending_part = "Parte I — Entendendo a Unção de Cura"
                    continue
                if low.startswith("parte ii") or "parte ii" in low:
                    pending_part = "Parte II — Caminhando na Unção"
                    continue
                if low in ("entendendo a unção de cura",):
                    # subtítulo da parte já embutido no rótulo
                    continue
                if low == "de cum":
                    continue
                if low in MAHESH_SECTIONS:
                    title, kind = MAHESH_SECTIONS[low]
                    part = pending_part if kind == "cap" else None
                    if kind == "cap":
                        pending_part = None
                    current = new_chapter(title, part)
                    chapters.append(current)
                    continue
                # desconhecido: ignora como título, segue como texto
                current[2].append(("p", text))
                continue

            if level == 3:
                continue  # eLivros (já descartado pelo corte)

            if level == 4:
                if re.fullmatch(r"Capítulo \w+", text):
                    continue
                if re.fullmatch(r"[\d.).\s]+", text):
                    continue
                if text == "Pastor Ciro Otávio":
                    if current:
                        current[2].append(("sig", text))
                    continue
                if current:
                    current[2].append(("h3", title_case(text)))
                continue

            if level == 5:  # marcadores de nota de rodapé
                if re.fullmatch(r"\d+", text):
                    continue
                if current:
                    current[2].append(("h3", title_case(text)))
                continue
            continue

        # lixo estrutural
        if re.fullmatch(r"Capítulo \w+", s):
            continue
        if s in ("Sumário", "de cum"):
            continue
        if s.lower() in MAHESH_DROP_LINES:
            continue
        if re.fullmatch(r"[\d.]+\)?", s):
            continue
        if re.fullmatch(r"[•\-]\s*\d+", s):
            continue
        if "Capítulo CincoDesenvolvimendo" in s or (
            s.startswith("-") and "Quebrando o jogo do inimigo Obedecendo" in s
        ):
            continue
        # restos do sumário em formato de lista
        if s.startswith("-") and "Capítulo" in s:
            continue
        # cabeçalhos de página com o nome do autor corrompido
        if re.match(r"^(Mahesh|Mnhesh|Mulussh|Mcibesb)\b", s) and len(s) < 70:
            continue
        if re.match(r"^<u>\d+</u>\s*Parte", s):
            pending_part = "Parte II — Caminhando na Unção"
            continue

        # parágrafo comum (remove marcadores de lista corrompidos)
        s = re.sub(r"^[•\-]\s+", "", s)
        s = normalize(s)
        if not s:
            continue
        if current is None:
            continue

        if is_all_caps(s):
            current[2].append(("h3", title_case(s)))
        else:
            current[2].append(("p", s))

    # renderiza HTML
    result = []
    for title, part, blocks in chapters:
        blocks = merge_fragments(blocks)
        html_parts = []
        if part:
            html_parts.append(f'<p class="part-label">{inline(part)}</p>')
        html_parts.append(f"<h2>{inline(title)}</h2>")
        for kind, text in blocks:
            text = mahesh_fixes(text)
            if not text:
                continue
            if kind == "h3":
                html_parts.append(f"<h3>{inline(text)}</h3>")
            elif kind == "sig":
                html_parts.append(f'<p class="signature"><em>{inline(text)}</em></p>')
            else:
                html_parts.append(f"<p>{inline(text)}</p>")
        result.append({"title": title, "content": "\n".join(html_parts)})
    return result


# =================================================================== ISCA
def is_italic_block(text):
    t = text.replace("**", "").strip()
    return len(t) > 2 and t.startswith("_") and t.endswith("_")


def build_isca():
    raw = open(f"{HERE}/isca.md", encoding="utf-8").read()
    lines = raw.split("\n")

    start = next(i for i, ln in enumerate(lines)
                 if ln.startswith("###### Minha profunda gratidão"))
    lines = lines[start:]

    chapters = []
    current = None

    def flush_list(buf):
        if buf and current is not None:
            items = "".join(f"<li>{inline(normalize(x))}</li>" for x in buf)
            current[2].append(("raw", f"<ul>{items}</ul>"))

    list_buf = []
    for ln in lines:
        s = ln.strip()

        if s.startswith("- "):
            list_buf.append(s[2:])
            continue

        if not s:
            continue  # listas sobrevivem a linhas em branco

        flush_list(list_buf)
        list_buf = []

        if s.startswith("|"):  # tabela (sumário)
            continue
        if re.fullmatch(r"\*[\s*]+", s):  # separador
            continue

        if s.startswith("#"):
            level = len(s) - len(s.lstrip("#"))
            text = clean_heading(s)
            if level == 4:
                current = [title_case(text), None, []]
                chapters.append(current)
            elif current is not None:
                tag = "h3" if level == 5 else "h4"
                current[2].append((tag, title_case(text)))
            continue

        if current is None:
            # agradecimentos antes do primeiro capítulo nível 4
            current = ["Agradecimentos", None, []]
            chapters.append(current)

        if is_italic_block(s):
            inner = s.replace("**", "").strip()[1:-1]
            current[2].append(("raw", f"<blockquote>{inline(inner)}</blockquote>"))
        else:
            current[2].append(("p", normalize(s)))

    flush_list(list_buf)

    result = []
    for title, _, blocks in chapters:
        blocks = merge_fragments(blocks)
        html_parts = [f"<h2>{inline(title)}</h2>"]
        for kind, text in blocks:
            if kind == "raw":
                html_parts.append(text)
            elif kind in ("h3", "h4"):
                html_parts.append(f"<{kind}>{inline(text)}</{kind}>")
            else:
                html_parts.append(f"<p>{inline(text)}</p>")
        result.append({"title": title, "content": "\n".join(html_parts)})
    return result


def main():
    mahesh_chapters = build_mahesh()
    isca_chapters = build_isca()

    books = {
        "poder-toque": {
            "title": "O Poder Secreto do Toque Daqueles que Creem",
            "subtitle": "Mahesh Chavda · A unção de Deus para curar",
            "chapters": mahesh_chapters,
        },
        "isca-satanas": {
            "title": "A Isca de Satanás",
            "subtitle": "John Bevere · Saiba como enfrentar e vencer o inimigo",
            "chapters": isca_chapters,
        },
    }

    header = (
        "/**\n"
        " * Livros completos convertidos dos PDFs (conteúdo textual para leitura).\n"
        " * Gerado por .tools/build_books.py a partir de:\n"
        " *  - O Poder Secreto do Toque Daqueles que Creem — Mahesh Chavda (Editora Dynamus)\n"
        " *  - A Isca de Satanás — John Bevere (Editora Atos)\n"
        " */\n"
        "Object.assign(BOOKS, "
    )
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(header)
        f.write(json.dumps(books, ensure_ascii=False, indent=2))
        f.write(");\n")

    for key, book in books.items():
        total = sum(len(c["content"]) for c in book["chapters"])
        print(f"{key}: {len(book['chapters'])} capítulos, {total} caracteres HTML")


if __name__ == "__main__":
    main()

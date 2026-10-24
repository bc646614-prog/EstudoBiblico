# Estudos Bíblicos — Ebooks

Aplicativo web de ebooks com dois estudos bíblicos completos, explicação **versículo a versículo**.

## Ebooks incluídos

1. **Dons Espirituais**  
   Texto principal: 1 Coríntios 12 (com Romanos 12 e Efésios 4)  
   Explicação detalhada sobre a diversidade, unidade e propósito dos dons do Espírito Santo.

2. **Libertação & Batalha Espiritual**  
   Textos principais: Efésios 6:10-18 e 2 Coríntios 10:3-5  
   Estudo sobre a armadura de Deus, a natureza da batalha espiritual e como viver em liberdade em Cristo.

## Como usar

Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Safari, Edge).

Ou, se preferir um servidor local:

```bash
# Com Python
python -m http.server 8080

# Com Node (npx)
npx serve .
```

Acesse `http://localhost:8080`.

## Recursos

- Layout responsivo (funciona bem no celular)
- Tema claro / escuro
- Ajuste de tamanho de fonte
- Navegação por capítulos
- Barra de progresso
- Atalhos de teclado: ← → (capítulos) e Esc (voltar)

## Estrutura

```
├── index.html          # Página principal + leitor
├── css/style.css       # Estilos
├── js/
│   ├── content.js      # Conteúdo dos ebooks
│   └── app.js          # Lógica do aplicativo
└── README.md
```

---

*Estudos Bíblicos • Versículo a Versículo*

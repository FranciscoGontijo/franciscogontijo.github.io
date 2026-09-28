# Portfólio · Francisco Gontijo

Meu site pessoal, em português e inglês: https://franciscogontijo.github.io

Mostra a Merge, onde sou co-fundador e desenvolvedor full stack, o QuadraON e meus projetos de estudo, com o currículo para baixar.

Feito em React (Create React App) e publicado no GitHub Pages.

## Rodar localmente

```bash
npm ci
npm start
```

## Publicar

```bash
npm run deploy
```

O deploy gera o build e envia para a branch `gh-pages`, que é a fonte do GitHub Pages. O `postbuild` copia o `index.html` para `404.html`, para que links diretos como `/about` funcionem.

## Onde mexer

- Textos do site, nos dois idiomas: `src/i18n/content.js`
- Links, imagens e tecnologias dos projetos: `src/data/data.js`
- Currículos em PDF: `public/cv/`
- Imagem de prévia para LinkedIn e WhatsApp: `public/og-image.png`

---

Personal portfolio in Portuguese and English, built with React and deployed to GitHub Pages.

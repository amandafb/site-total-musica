# Total Música

Site institucional da Total Música, desenvolvido e mantido por [Amanda Borim](https://github.com/amandafb).

→ **[totalmusica.com.br](https://totalmusica.com.br)**

---

## Sobre o projeto

Site multi-página para escola de música com foco em performance, acessibilidade e SEO.
Inclui páginas institucionais, páginas de instrumento com conteúdo específico por instrumento,
ferramentas interativas de teoria musical e página de produção musical.

**Lighthouse (desktop · maio 2026)**

| Performance | Acessibilidade | Best Practices | SEO |
| :---------: | :------------: | :------------: | :-: |
|     99      |       94       |      100       | 100 |

---

## Tecnologias

- HTML5 semântico
- CSS3 com custom properties e metodologia BEM
- JavaScript vanilla (ES6+)
- Vite como build tool (minificação de CSS e JS)
- Schema.org para dados estruturados
- Open Graph para compartilhamento em redes sociais

---

## Estrutura

├── assets/
│ ├── css/ # Fontes CSS organizados por responsabilidade
│ ├── js/ # Scripts por página
│ └── img/ # Imagens otimizadas em .webp
├── teoria-musical/ # Ferramentas interativas de teoria musical
├── vite.config.js # Configuração de build
└── \*.html # Páginas do site

---

## Build

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção (gera pasta dist/)
npm run build

# Preview do build
npm run preview
```

O conteúdo da pasta `dist/` é o que vai para o servidor de produção.

---

## Decisões técnicas

**Sem framework** — o site é HTML/CSS/JS puro. A escolha foi intencional: sem overhead de framework para um site estático com conteúdo majoritariamente fixo.

**CSS por responsabilidade** — os arquivos CSS são separados por escopo (`components`, `layout`, `tokens`, `pages/*`), processados e minificados pelo Vite no build.

**Schema.org** — cada página tem dados estruturados específicos (`MusicSchool`, `Course`, `Person`, `Service`) para melhor indexação.

**Acessibilidade** — skip links, `aria-label` nos elementos interativos, hierarquia semântica de headings e contraste verificado.

# Ana Luiza Rigueira | Âmagus Lapidar

Frontend estático em React + Vite para o site de Ana Luiza Rigueira, preparado para hospedagem na Vercel no domínio `analuizarigueira.com.br`.

## Requisitos

- Node.js 18 ou superior
- npm
- Git

## Rodar localmente

```bash
npm install
npm run dev
```

Abra a URL local exibida pelo Vite.

## Build

```bash
npm run build
```

O build de produção é gerado em `dist/`.

## Publicação na Vercel

Configuração esperada:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Domínio: `analuizarigueira.com.br`

O arquivo `vercel.json` mantém o roteamento SPA apontando qualquer rota para `index.html`.

## Estrutura principal

- `src/pages/Home.jsx`: página principal.
- `src/components/amagus/`: componentes visuais do site.
- `src/lib/amagusConfig.js`: textos, contatos e caminhos dos assets.
- `public/assets/amagus/`: imagens locais usadas pelo site.
- `public/amagus-favicon.svg`: favicon local da marca.

# Landing Page Pro

Landing page moderna, rápida e responsiva construída com **React 19**, **Vite 5** e **Tailwind CSS 3**, seguindo o padrão **shadcn/ui** (Radix) e aproveitando o **React Compiler** para otimização automática de memoização.

A página é montada por **seções independentes** (Hero, Benefits, Sales, SocialProof, Contact, CTA) compostas em `pages/Home.jsx`, com dados assíncronos gerenciados por **TanStack Query** e carrosséis em **Swiper**.

---

## Sumário

- [Funcionalidades](#-funcionalidades)
- [Stack](#-stack)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como rodar](#-como-rodar)
- [Build de produção](#-build-de-produção)
- [Lint](#-lint)
- [Alias de importação](#-alias-de-importação)
- [Adicionando componentes shadcn/ui](#-adicionando-componentes-shadcnui)
- [Deploy](#-deploy)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## ✨ Funcionalidades

- **Hero** com imagem em destaque, badges e chamada para ação.
- **Benefícios**, **Prova social** e **CTA** como seções isoladas e reutilizáveis.
- **Vendas** com carrossel (Swiper).
- **Contato** com formulário e hook dedicado de envio de e-mail (`useSendEmail`).
- Componentes UI no padrão [shadcn/ui](https://ui.shadcn.com/) em `@/components/ui/*`.
- Ícones via [lucide-react](https://lucide.dev/) e [react-icons](https://react-icons.github.io/react-icons/).
- Roteamento com [React Router 7](https://reactrouter.com/).
- Cache e sincronização de dados com [TanStack Query 5](https://tanstack.com/query/latest).
- [React Compiler](https://react.dev/learn/react-compiler) habilitado via `babel-plugin-react-compiler` (memoização automática).
- Toasts com [sonner](https://sonner.emilkowal.ski/).
- Layout 100% responsivo, mobile-first.

---

## 🛠️ Stack

| Categoria         | Tecnologia                                |
|-------------------|-------------------------------------------|
| Framework         | React 19                                  |
| Build tool        | Vite 5                                    |
| Estilização       | Tailwind CSS 3 + shadcn/ui (Radix)        |
| Ícones            | lucide-react, react-icons                 |
| Roteamento        | React Router 7                            |
| Dados assíncronos | TanStack Query 5                          |
| Carrossel         | Swiper 12                                 |
| Toasts            | sonner                                    |
| Lint              | ESLint 9                                  |
| Compilador        | React Compiler (`babel-plugin-react-compiler`) |

---

## 📁 Estrutura do projeto

```
landing-page-pro/
├── client/                          # aplicação React (front-end)
│   ├── public/                      # assets estáticos
│   ├── src/
│   │   ├── assets/                  # imagens, fontes, svgs
│   │   ├── components/
│   │   │   └── ui/                  # componentes shadcn/ui (Button, Card, …)
│   │   ├── hooks/                   # hooks customizados (ex.: useSendEmail)
│   │   ├── lib/                     # utilitários (cn, queryClient, …)
│   │   ├── pages/
│   │   │   └── Home.jsx             # página principal, monta as seções
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Benefits.jsx
│   │   │   ├── Sales.jsx
│   │   │   ├── SocialProof.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── CTA.jsx
│   │   ├── types/
│   │   ├── index.css
│   │   └── main.jsx
│   ├── components.json              # config do shadcn/ui
│   ├── eslint.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── LICENSE                          # MIT
├── package.json                     # metadados do repositório (raiz)
└── README.md
```

> O alias **`@/*`** aponta para `client/src/*` (definido em `imports` no `package.json` do client), então `@/components/ui/Button` resolve para `client/src/components/ui/Button`.

---

## 🚀 Como rodar

### 1. Clonar o repositório

```bash
git clone https://github.com/Kobayashi24730/landing-page-pro.git
cd landing-page-pro/client
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Subir o dev server

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

---

## 🏗️ Build de produção

```bash
npm run build
```

Os arquivos otimizados são gerados em `client/dist/`. Para pré-visualizar localmente:

```bash
npm run preview
```

---

## 🔍 Lint

```bash
npm run lint
```

Configuração flat do ESLint 9 em `client/eslint.config.js`, com plugins `react-hooks` e `react-refresh`.

---

## 🔧 Alias de importação

Use o alias `@/` em vez de caminhos relativos:

```jsx
import { Button } from "@/components/ui/Button";
import { useSendEmail } from "@/hooks/useSendEmail";
```

Ele é configurado em três lugares — mantenha os três sincronizados se mudar a estrutura:

- `client/package.json` → `"imports": { "@/*": "./src/*" }`
- `client/vite.config.js` → `resolve.alias`
- `client/components.json` → `aliases.components` (para o shadcn CLI)

---

## 🧩 Adicionando componentes shadcn/ui

Com a CLI do shadcn:

```bash
# na pasta client/
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add input
```

O `components.json` já define estilo, cores CSS variables e o alias `@/components`. Os componentes são gerados em `client/src/components/ui/`.

---

## 🌐 Deploy

Como é um projeto Vite estático, qualquer host com build estático funciona (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

**Vercel / Netlify** — configure:

| Campo            | Valor                          |
|------------------|--------------------------------|
| Root directory   | `client`                       |
| Build command    | `npm run build`                |
| Output directory | `dist`                         |

**Cloudflare Pages** — mesmo esquema, apontando `client` como root e `dist` como output.

> Lembre de definir a rota base se for publicar em subcaminho (`build.rollupOptions` ou `base` no `vite.config.js`).

---

## 🤝 Contribuindo

1. Faça um **fork** do repositório.
2. Crie uma branch: `git checkout -b feat/minha-feature`.
3. Rode `npm run lint` antes de commitar.
4. Use mensagens em [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`, `style:`…).
5. Faça push e abra um **Pull Request** descrevendo o que muda e por quê.

Bugs e sugestões: [Issues](https://github.com/Kobayashi24730/landing-page-pro/issues).

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [`LICENSE`](./LICENSE) para o texto completo.

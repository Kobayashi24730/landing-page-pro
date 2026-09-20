# Landing Page Pro

Landing page moderna, rápida e responsiva, construída com React 19 e Tailwind CSS.

## ✨ Funcionalidades

- Seção Hero com imagem em destaque, badges e chamada para ação
- Componentes de UI reutilizáveis no padrão [shadcn/ui](https://ui.shadcn.com/) (`@/components/ui/*`)
- Ícones via [lucide-react](https://lucide.dev/) e [react-icons](https://react-icons.github.io/react-icons/)
- Carrosséis/sliders com [Swiper](https://swiperjs.com/)
- Roteamento com [React Router](https://reactrouter.com/)
- Cache e gerenciamento de dados assíncronos com [TanStack Query](https://tanstack.com/query/latest)
- React Compiler habilitado (`babel-plugin-react-compiler`)
- Layout 100% responsivo (mobile-first)

## 🛠️ Stack

| Categoria         | Tecnologia                          |
| ----------------- | ------------------------------------ |
| Framework         | React 19                             |
| Build tool        | Vite 5                               |
| Estilização       | Tailwind CSS 3 + shadcn/ui (Radix)   |
| Ícones            | lucide-react, react-icons            |
| Roteamento        | React Router 7                       |
| Dados assíncronos | TanStack Query 5                     |
| Carrossel         | Swiper                               |
| Lint              | ESLint 9                             |
| Compilador        | React Compiler (babel-plugin)        |

## 📁 Estrutura do projeto

```
landing-page-pro/
├── client/              # aplicação React (front-end)
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/      # componentes shadcn/ui (Button, etc.)
│   │   └── ...
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── package.json          # metadados do repositório (raiz)
└── README.md
```

> O alias `@/*` aponta para `client/src/*` (definido em `imports` no
> `package.json` do client), então importações como
> `@/components/ui/Button` resolvem para `client/src/components/ui/Button`.

## 🚀 Como rodar

Clone o repositório e entre na pasta do front-end:

```bash
git clone https://github.com/Kobayashi24730/landing-page-pro.git
cd landing-page-pro/client
```

Instale as dependências:

```bash
npm install
```

Suba o ambiente de desenvolvimento (Vite):

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## 🏗️ Build para produção

```bash
npm run build
```

Os arquivos otimizados são gerados em `client/dist/`. Para pré-visualizar o build localmente:

```bash
npm run preview
```

## 🔍 Lint

```bash
npm run lint
```

## 📄 Licença

Este projeto está sob a licença MIT (conforme definido em `package.json`).

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: minha feature'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request
# NLW Agents - Frontend

Este é o frontend do projeto **NLW Agents**, desenvolvido durante o evento **Next Level Week (NLW)** promovido pela **Rocketseat**. O objetivo do projeto é construir uma IA capaz de responder comentários em transmissões ao vivo, utilizando tecnologias modernas e boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **React** — Biblioteca para construção de interfaces de usuário.
- **React Router DOM** — Gerenciamento de rotas no frontend.
- **TanStack React Query** — Gerenciamento de estado e requisições assíncronas.
- **TailwindCSS** — Estilização com classes utilitárias.
- **Vite** — Ferramenta de build e desenvolvimento.
- **TypeScript** — Tipagem estática para JavaScript.
- **Lucide Icons** — Biblioteca de ícones modernos.

## 📁 Estrutura do Projeto

- `src/pages`: Páginas principais do projeto, como `create-room` e `room`.
- `src/lib`: Funções utilitárias (ex: `cn` para manipulação de classes CSS).
- `src/index.css`: Estilização global com TailwindCSS.
- `vite.config.ts`: Configuração do Vite, incluindo aliases para facilitar importações.

## 🧩 Padrões de Projeto

- **Componentização**: Utilização de componentes reutilizáveis visando manutenção e escalabilidade.
- **React Query**: Para gerenciamento eficiente de requisições HTTP e cache.
- **Aliases de Importação**: Configurados no `vite.config.ts` e `tsconfig.json` para melhorar a organização dos imports.

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- Gerenciador de pacotes (npm, yarn ou pnpm)

### Passos para Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nlw-agents.git
   cd nlw-agents/web
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto no navegador:**
   ```
   http://localhost:5173
   ```

### 📦 Build para Produção
Para gerar os arquivos otimizados para produção, execute:
```bash
npm run build
```
Os arquivos serão gerados na pasta `dist`.

## 🌐 Estrutura de Rotas

| Rota               | Descrição                                    |
|---------------------|----------------------------------------------|
| `/`                 | Página inicial para criar ou visualizar salas. |
| `/room/:roomId`    | Página para interagir em uma sala específica. |

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante o evento **NLW** da **Rocketseat**.

Desenvolvido com 💜 pela comunidade Rocketseat.
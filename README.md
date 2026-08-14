[Versão em Português](#portugues) | [English Version](#english)

---

<a id="portugues"></a>

# Versão em Português

# Lista de Tarefas — Next.js + TypeScript + Jest + CI/CD
**Projeto desenvolvido por Chrys Penalber**

Aplicação desenvolvida com **Next.js**, **TypeScript** e **Tailwind CSS**, com testes automatizados utilizando **Jest** e **React Testing Library**. O projeto também possui uma pipeline de **Integração Contínua (CI)** e **Entrega Contínua (CD)** configurada com **GitHub Actions** e deploy automático na **Vercel**.

---

## Objetivos

- Exibir uma lista de tarefas.
- Permitir a adição de novas tarefas por meio de um formulário controlado.
- Contar automaticamente a quantidade de tarefas utilizando um hook personalizado.
- Aplicar testes unitários em componentes React e hooks.
- Automatizar a validação, os testes e o build da aplicação utilizando GitHub Actions.
- Realizar o deploy automático da aplicação na Vercel após alterações na branch `main`.

---

## Links

- **Repositório no GitHub:** *https://github.com/chryspenalber/tarefa-23-testes*
- **Live Site:** *https://tarefa-23-testes.vercel.app/*

---

## Principais Funcionalidades

- Listagem de tarefas carregadas de uma fonte simulada.
- Adição de novas tarefas.
- Atualização automática da quantidade de tarefas.
- Hook personalizado para contagem de tarefas.
- Testes unitários utilizando Jest e React Testing Library.
- Validação do código utilizando ESLint.
- Build automatizado da aplicação.
- Deploy automático na Vercel por meio do GitHub Actions.

---

## Estrutura do Projeto

```text
.github/
└── workflows/
    ├── main.yml
    └── deploy.yml

src/
│
├── app/
│   └── page.tsx
│
├── components/
│   ├── ListaTarefas.tsx
│   └── NovaTarefa.tsx
│
├── hooks/
│   └── useContadorDeTarefas.ts
│
├── lib/
│   └── tarefas.ts
│
├── tests/
│   ├── ListaTarefas.test.tsx
│   ├── NovaTarefa.test.tsx
│   └── useContadorDeTarefas.test.ts
│
└── types/
    └── tarefa.ts
```

---

## Tecnologias

- Next.js
- React
- TypeScript
- Jest
- React Testing Library
- Tailwind CSS
- ESLint
- GitHub Actions
- Vercel

---

## Testes Implementados

### Hook

- Retorna corretamente a quantidade de tarefas.
- Retorna zero quando a lista está vazia.

### Componente NovaTarefa

- Renderiza o campo de texto.
- Renderiza o botão.
- Chama a função `onAdicionar` ao clicar no botão.

### Componente ListaTarefas

- Renderiza corretamente a lista de tarefas recebida.

---

## Integração Contínua (CI)

A pipeline de CI é executada automaticamente em `push` ou `pull request` para a branch `main`.

As seguintes etapas são executadas:

- Instalação das dependências com `npm ci`.
- Verificação do código com ESLint.
- Execução dos testes com Jest.
- Build da aplicação com Next.js.

---

## Entrega Contínua (CD)

O projeto possui um workflow de deploy configurado com **GitHub Actions**.

Após uma alteração na branch `main`, a pipeline:

- Instala as dependências.
- Configura o Node.js.
- Instala a Vercel CLI.
- Realiza o build da aplicação.
- Publica automaticamente a aplicação na Vercel.

O token de autenticação da Vercel é armazenado de forma segura como um **GitHub Actions Secret**, utilizando a variável `VERCEL_TOKEN`.

---

## Como executar

### Instalar as dependências

```bash
npm install
```

### Executar o projeto

```bash
npm run dev
```

Abra:

```text
http://localhost:3000
```

---

## Executar os testes

```bash
npm test
```

---

## Executar o lint

```bash
npm run lint
```

---

## Executar o build

```bash
npm run build
```

---

## Contato

- GitHub — https://github.com/chryspenalber
- LinkedIn — https://www.linkedin.com/in/chrystiana-penalber/

---

<a id="english"></a>

# English Version

# Task List — Next.js + TypeScript + Jest + CI/CD
**Project developed by Chrys Penalber**

This project was built with **Next.js**, **TypeScript** and **Tailwind CSS**, with automated tests using **Jest** and **React Testing Library**. It also includes a **Continuous Integration (CI)** and **Continuous Delivery (CD)** pipeline configured with **GitHub Actions**, with automatic deployment to **Vercel**.

---

## Goals

- Display a task list.
- Allow users to add new tasks through a controlled form.
- Automatically count the number of tasks using a custom hook.
- Apply unit tests to React components and hooks.
- Automate code validation, testing and build using GitHub Actions.
- Automatically deploy the application to Vercel after changes to the `main` branch.

---

## Links

- **GitHub Repository:** *https://github.com/chryspenalber/tarefa-23-testes*
- **Live Site:** *https://tarefa-23-testes.vercel.app/*

---

## Key Features

- Task list loaded from a simulated data source.
- Add new tasks.
- Automatic task counter.
- Custom hook for counting tasks.
- Unit tests using Jest and React Testing Library.
- Code validation using ESLint.
- Automated application build.
- Automatic deployment to Vercel through GitHub Actions.

---

## Project Structure

```text
.github/
└── workflows/
    ├── main.yml
    └── deploy.yml

src/
│
├── app/
│   └── page.tsx
│
├── components/
│   ├── ListaTarefas.tsx
│   └── NovaTarefa.tsx
│
├── hooks/
│   └── useContadorDeTarefas.ts
│
├── lib/
│   └── tarefas.ts
│
├── tests/
│   ├── ListaTarefas.test.tsx
│   ├── NovaTarefa.test.tsx
│   └── useContadorDeTarefas.test.ts
│
└── types/
    └── tarefa.ts
```

---

## Technologies

- Next.js
- React
- TypeScript
- Jest
- React Testing Library
- Tailwind CSS
- ESLint
- GitHub Actions
- Vercel

---

## Tests

### Hook

- Returns the correct number of tasks.
- Returns zero when there are no tasks.

### NovaTarefa Component

- Renders the input field.
- Renders the button.
- Calls `onAdicionar` when the button is clicked.

### ListaTarefas Component

- Correctly renders the received task list.

---

## Continuous Integration (CI)

The CI pipeline runs automatically on `push` or `pull request` to the `main` branch.

The following steps are executed:

- Install dependencies using `npm ci`.
- Validate the code using ESLint.
- Run tests using Jest.
- Build the application using Next.js.

---

## Continuous Delivery (CD)

The project includes a deployment workflow configured with **GitHub Actions**.

After changes are pushed to the `main` branch, the pipeline:

- Installs dependencies.
- Configures Node.js.
- Installs the Vercel CLI.
- Builds the application.
- Automatically deploys the application to Vercel.

The Vercel authentication token is securely stored as a **GitHub Actions Secret** using the `VERCEL_TOKEN` variable.

---

## Running the Project

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Running the Tests

```bash
npm test
```

---

## Running ESLint

```bash
npm run lint
```

---

## Running the Build

```bash
npm run build
```

---

## Contact

- GitHub — https://github.com/chryspenalber
- LinkedIn — https://www.linkedin.com/in/chrystiana-penalber/

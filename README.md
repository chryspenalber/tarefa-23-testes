[Versão em Português](#portugues) | [English Version](#english)

---

<a id="portugues"></a>

# Versão em Português

# Lista de Tarefas — Next.js 15 + TypeScript + Jest
**Projeto desenvolvido por Chrys Penalber**

Aplicação desenvolvida com **Next.js 15 (App Router)** e **TypeScript** para praticar conceitos de componentes Server e Client, hooks personalizados e testes unitários utilizando Jest e React Testing Library.

---

## Objetivos

- Exibir uma lista de tarefas carregada por um Server Component.
- Permitir a adição de novas tarefas por meio de um formulário controlado.
- Contar automaticamente a quantidade de tarefas utilizando um hook personalizado.
- Aplicar testes unitários em componentes React e hooks.

---

## Links

- **Repositório no GitHub:** *(adicione aqui o link quando publicar)*
- **Live Site:** *(opcional, caso publique na Vercel)*

---

## Principais Funcionalidades

- Listagem de tarefas carregadas de uma fonte simulada.
- Adição de novas tarefas.
- Atualização automática da quantidade de tarefas.
- Hook personalizado para contagem de tarefas.
- Testes unitários utilizando Jest e React Testing Library.

---

## Estrutura do Projeto

```text
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

- Next.js 15
- React 19
- TypeScript
- Jest
- React Testing Library
- Tailwind CSS

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

```
http://localhost:3000
```

---

## Executar os testes

```bash
npm test
```

---

## Contato

- GitHub — https://github.com/chryspenalber
- LinkedIn — https://www.linkedin.com/in/chrystiana-penalber/

---

<a id="english"></a>

# English Version

# Task List — Next.js 15 + TypeScript + Jest
**Project developed by Chrys Penalber**

This project was built with **Next.js 15 (App Router)** and **TypeScript** to practice Server Components, Client Components, custom hooks and unit testing using Jest and React Testing Library.

---

## Goals

- Display a task list loaded by a Server Component.
- Allow users to add new tasks through a controlled form.
- Count the current number of tasks using a custom hook.
- Practice unit testing for React components and hooks.

---

## Links

- **GitHub Repository:** *(add your repository URL)*
- **Live Site:** *(optional)*

---

## Key Features

- Task list loaded from a simulated data source.
- Add new tasks.
- Automatic task counter.
- Custom hook for counting tasks.
- Unit tests using Jest and React Testing Library.

---

## Project Structure

```text
src/
│
├── app/
├── components/
├── hooks/
├── lib/
├── tests/
└── types/
```

---

## Technologies

- Next.js 15
- React 19
- TypeScript
- Jest
- React Testing Library
- Tailwind CSS

---

## Tests

### Hook

- Returns the correct number of tasks.
- Returns zero when there are no tasks.

### NovaTarefa Component

- Renders the input.
- Renders the button.
- Calls `onAdicionar` when the button is clicked.

### ListaTarefas Component

- Correctly renders the list of tasks.

---

## Running the Project

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Running the Tests

```bash
npm test
```

---

## Contact

- GitHub — https://github.com/chryspenalber
- LinkedIn — https://www.linkedin.com/in/chrystiana-penalber/
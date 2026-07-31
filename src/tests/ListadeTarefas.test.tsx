import { render, screen } from "@testing-library/react";
import ListaTarefas from "@/components/ListaTarefas";
import { Tarefa } from "@/types/tarefa";

test("deve renderizer a lista de tarefas", () => {
  const tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: "Estudar Next.js",
      concluida: false,
    },
    {
      id: 2,
      titulo: "Aprender testes",
      concluida: true,
    },
  ];

  render(<ListaTarefas tarefas={tarefas} />);

  expect(screen.getByText("Estudar Next.js")).toBeInTheDocument();
  expect(screen.getByText("Aprender testes")).toBeInTheDocument();
});

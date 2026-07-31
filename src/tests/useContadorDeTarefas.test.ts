import { renderHook } from "@testing-library/react";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";
import { Tarefa } from "@/types/tarefa";

test("deve retornar a quantidade de tarefas", () => {
  const tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: "Estudar Next.js",
      concluida: false,
    },
    {
      id: 2,
      titulo: "Aprender Jest",
      concluida: false,
    },
    {
      id: 3,
      titulo: "Finalizar projeto",
      concluida: true,
    },
  ];

  const { result } = renderHook(() => useContadorDeTarefas(tarefas));

  expect(result.current).toBe(3);
});

test("deve retornar zero quando não houver tarefas", () => {
  const tarefas: Tarefa[] = [];

  const { result } = renderHook(() =>
    useContadorDeTarefas(tarefas)
  );

  expect(result.current).toBe(0);
});
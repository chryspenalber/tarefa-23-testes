import { Tarefa } from "@/types/tarefa";

export default function useContadorDeTarefas(
    tarefas: Tarefa[]
) {
    return tarefas.length;
}
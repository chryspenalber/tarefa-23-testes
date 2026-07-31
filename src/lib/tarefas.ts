import { Tarefa } from "@/types/tarefa";

const tarefas: Tarefa[] = [
    {
        id: 1,
        titulo: "Estudar Next.js",
        concluida: false,
    },
    {
        id: 2,
        titulo: "Aprender testes unitários",
        concluida: false,
    },
    {
        id: 3,
        titulo: "Finalizar a tarefa da EBAC",
        concluida: true,
    },    
];

export async function buscarTarefas(): Promise<Tarefa[]> {
    return Promise.resolve(tarefas);
}
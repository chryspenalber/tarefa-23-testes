"use client";

import { Tarefa } from "@/types/tarefa";
import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

type ListaTarefasProps = {
  tarefas: Tarefa[];
};

export default function ListaTarefas({ tarefas }: ListaTarefasProps) {
  const [lista, setLista] = useState(tarefas);

  const quantidade = useContadorDeTarefas(lista);

  function adicionarTarefa(titulo: string) {
    const novoId = lista.length > 0 ? lista[lista.length - 1].id + 1 : 1;

    const novaTarefa: Tarefa = {
      id: novoId,
      titulo,
      concluida: false,
    };

    setLista([...lista, novaTarefa]);
  }

  return (
    <section className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12">
      <h1 className="text-3xl font-bold text-slate-800">Lista de Tarefas</h1>

      <p className="mt-2 text-slate-500">
        Organize suas atividades e acompanhe seu progresso.
      </p>

      <div className="mt-8">
        <NovaTarefa onAdicionar={adicionarTarefa} />
      </div>

      <p className="mt-8 mb-4 text-sm text-slate-500">
  Total de tarefas

  <span className="ml-2 rounded-full bg-teal-700 px-3 py-1 text-white">
    {quantidade}
  </span>
</p>

      <ul className="mt-8 space-y-4">
        {lista.map((tarefa) => (
          <li
            key={tarefa.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md"
          >
            <h2 className="text-lg font-medium text-slate-800">
              {tarefa.titulo}
            </h2>
          </li>
        ))}
      </ul>
      <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
        Desenvolvido por Chrys Penalber como parte do curso de Engenharia
        Front-End da EBAC.
      </footer>
    </section>
  );
}

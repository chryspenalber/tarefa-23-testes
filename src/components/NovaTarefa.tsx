"use client";

import { useState } from "react";

type NovaTarefaProps = {
  onAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");

  function enviarNovaTarefa() {
    if (titulo.trim() === "") {
      return;
    }
    onAdicionar(titulo);
    setTitulo("");
  }

  return (
    <div className="flex gap-4">
      <input
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-700 text-gray-600"
        placeholder="Digite uma nova tarefa..."
        type="text"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />
      <button
        className="rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800"
        onClick={enviarNovaTarefa}
      >
        Adicionar
      </button>
    </div>
  );
}

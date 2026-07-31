import { buscarTarefas } from "@/lib/tarefas";
import ListaTarefas from "@/components/ListaTarefas";

export default async function Home() {
  const tarefas = await buscarTarefas();

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">

      <ListaTarefas tarefas={tarefas} />
    </main>
  );
}

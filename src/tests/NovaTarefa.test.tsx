import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "@/components/NovaTarefa";

test("deve renderizar o input e o botão", () => {
  render(<NovaTarefa onAdicionar={() => {}} />);

  const input = screen.getByRole("textbox");
  const botao = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(botao).toBeInTheDocument();
});

test("deve chamar onAdicionar ao clicar no botão", async () => {
  const onAdicionar = jest.fn();
  render(<NovaTarefa onAdicionar={onAdicionar} />);

  const user = userEvent.setup();

  const input = screen.getByRole("textbox");
  const botao = screen.getByRole("button");

  await user.type(input, "Aprender Jest");
  await user.click(botao);

  expect(onAdicionar).toHaveBeenCalledTimes(1);
});

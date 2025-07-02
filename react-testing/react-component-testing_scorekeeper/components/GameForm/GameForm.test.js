import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

const Mock = jest.fn();
jest.mock("next/router", () => ({
  useRouter() {
    return { push: Mock };
  },
}));

beforeEach(() => {
  Mock.mockClear();
});

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={jest.fn()} />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button", { name: /create game/i });

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={jest.fn()} />);

  const form = screen.getByRole("form", { name: /create a new game/i });
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const user = userEvent.setup();
  const handleCreateGame = jest.fn();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameInput = screen.getByLabelText(/name of game/i);
  const playersInput = screen.getByLabelText(/player names/i);
  const button = screen.getByRole("button", { name: /create game/i });

  await user.type(nameInput, "Codenames");
  await user.type(playersInput, "Alice, Bob");

  await user.click(button);

  expect(handleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Codenames",
    playerNames: ["Alice", "Bob"],
  });

  expect(Mock).toHaveBeenCalledWith("/game");
});

test("does not submit form if one input field is left empty", async () => {
  const user = userEvent.setup();
  const handleCreateGame = jest.fn();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameInput = screen.getByLabelText(/name of game/i);
  const button = screen.getByRole("button", { name: /create game/i });

  await user.type(nameInput, "Dice");
  await user.click(button);

  expect(handleCreateGame).not.toHaveBeenCalled();
  expect(Mock).not.toHaveBeenCalled();
});

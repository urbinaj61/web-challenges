import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", async () => {
  render(
    <Player
      name='Alice'
      score={5}
      onDecreasePlayerScore={() => {}}
      onIncreasePlayerScore={() => {}}
    />
  );

  expect(screen.getByText("Alice")).toBeInTheDocument();

  expect(screen.getByText("5")).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /decrease score/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /increase score/i })
  ).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const user = userEvent.setup();
  const onDecrease = jest.fn();
  const onIncrease = jest.fn();

  render(
    <Player
      name='Bob'
      score={2}
      onDecreasePlayerScore={onDecrease}
      onIncreasePlayerScore={onIncrease}
    />
  );

  await user.click(screen.getByRole("button", { name: /decrease score/i }));
  expect(onDecrease).toHaveBeenCalledTimes(1);

  await user.click(screen.getByRole("button", { name: /increase score/i }));
  expect(onIncrease).toHaveBeenCalledTimes(1);
});

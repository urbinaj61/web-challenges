import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText='Name'
      placeholder='Enter your name'
      name='username'
      value=''
      onChange={() => {}}
      required
    />
  );

  const label = screen.getByLabelText(/name/i);
  expect(label).toBeInTheDocument();
  expect(label).toHaveAttribute("id", "username");

  const input = screen.getByPlaceholderText("Enter your name");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "username");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  const handleChange = jest.fn();

  render(
    <Input
      labelText='Email'
      placeholder='Enter your email'
      name='email'
      value=''
      onChange={handleChange}
    />
  );

  const input = screen.getByPlaceholderText("Enter your email");

  await user.type(input, "john");

  expect(handleChange).toHaveBeenCalledTimes(4);
});

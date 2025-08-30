import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Toggle from "./Toggle.jsx";

test("Display text that contains", () => {
  render(<Toggle />);

  expect(screen.queryByText(/now you see me/i)).not.toBeInTheDocument();

  const button = screen.getByRole("button", { name: /Toggle/i });

  fireEvent.click(button);
  expect(screen.getByText(/now you see me/i)).toBeInTheDocument();

  fireEvent.click(button);
  expect(screen.queryByText(/now you see me/i)).not.toBeInTheDocument();
});

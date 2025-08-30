import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button.jsx";
import { expect } from "vitest";

test("render button with text", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  fireEvent.click(screen.getByText("Click"));
  expect(handleClick).toHaveBeenCalled;
});

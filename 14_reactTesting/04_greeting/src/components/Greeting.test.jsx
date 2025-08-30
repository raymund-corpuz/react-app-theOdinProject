import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Greeting from "./Greeting";

test("render h1 element", () => {
  render(<Greeting name="Hello, Raymund" />);

  const heading = screen.getByRole("heading", { level: 1 });

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Hello, Raymund!");

  expect(heading.tagName).toBe("H1");
});

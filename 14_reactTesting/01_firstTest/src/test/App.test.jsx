// import { describe, it, expect } from "vitest";

// describe("something truthy and falsy", () => {
//   it("true to be true", () => {
//     expect(true).toBe(true);
//   });
//   it("false to be false", () => {
//     expect(false).toBe(false);
//   });
// });

// import { render, screen } from "@testing-library/react";

// import App from "../App";

// describe("App", () => {
//   it("renders headline", () => {
//     render(<App title="React" />);

//     expect(screen.getByRole("heading", { name: /react/i })).toBeInTheDocument();
//   });
// });

// import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import App from "../App";

// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

// import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import App from "../App";

// describe("App component", () => {
//   it("render correct heading", () => {
//     render(<App />);

//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App Component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});

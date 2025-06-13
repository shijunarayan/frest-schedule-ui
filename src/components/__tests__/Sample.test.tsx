import { render, screen } from "@testing-library/react";
import React from "react";

describe("Sample test", () => {
  it("renders a simple message", () => {
    render(<div>Hello Frest!</div>);
    expect(screen.getByText("Hello Frest!")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ScheduleManager from "../ScheduleManager";

describe("ScheduleManager", () => {
  it("renders the title prop correctly", () => {
    render(<ScheduleManager title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("shows fallback title if none is passed", () => {
    render(<ScheduleManager />);
    expect(screen.getByText("Schedule Manager")).toBeInTheDocument();
  });
});

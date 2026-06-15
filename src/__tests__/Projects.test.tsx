import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "../components/Project";
import { projectContent } from "../data/projectContent";

describe("Projects component", () => {
  it("renders projects section and a project title", () => {
    render(<Projects projectContent={projectContent} />);
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Realtime Chat App/i)).toBeInTheDocument();
  });

  it("renders tech tags for a project", () => {
    render(<Projects projectContent={projectContent} />);
    expect(
      screen.getByRole("img", { name: /Realtime Chat App/i }),
    ).toBeInTheDocument();
  });
});

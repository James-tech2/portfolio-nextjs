import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skills from "../components/Skills";
import { skillContent } from "../data/skillContent";

describe("Skills component", () => {
  it("renders heading and a known skill", () => {
    render(<Skills skillContent={skillContent} />);
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
  });

  it("shows a skill value percentage", () => {
    render(<Skills skillContent={skillContent} />);
    // React has value 90 in skillContent
    expect(screen.getByText(/90%/i)).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../components/Hero";

describe("Hero component", () => {
  it("renders About Me heading and main intro", () => {
    render(<Hero />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getByText(/Hi, I’m James Black/i)).toBeInTheDocument();
  });

  it("shows experience and focus cards and portrait alt text", () => {
    render(<Hero />);
    expect(screen.getByText(/7\+ yrs/i)).toBeInTheDocument();
    // image alt text is present in the component
    expect(screen.getByAltText(/Portrait of James Black/i)).toBeInTheDocument();
  });
});

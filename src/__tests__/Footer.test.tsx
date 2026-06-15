import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("renders author name and contact info", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeInTheDocument();
    expect(
      within(footer).getByText(/hello@jamesblack.dev/i),
    ).toBeInTheDocument();
    expect(
      within(footer).getByText(/github.com\/James-tech2/i),
    ).toBeInTheDocument();
  });

  it("shows copyright text with current year", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 James Black/i)).toBeInTheDocument();
  });
});

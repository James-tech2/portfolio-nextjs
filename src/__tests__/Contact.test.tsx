import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";
import { contactItems } from "../data/contactContent";

describe("Contact component", () => {
  it("renders contact heading and button", () => {
    render(<Contact contactItems={contactItems} />);

    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Send message/i }),
    ).toBeInTheDocument();
  });

  it("renders contact items with correct links", () => {
    render(<Contact contactItems={contactItems} />);
    const emailEl = screen.getByText(/hello@jamesblack.dev/i);
    expect(emailEl).toBeInTheDocument();
    expect(emailEl.closest("a")).toHaveAttribute(
      "href",
      "mailto:hello@jamesblack.dev",
    );

    const githubEl = screen.getByText(/github.com\/James-tech2/i);
    expect(githubEl).toBeInTheDocument();
    expect(githubEl.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/James-tech2",
    );
  });
});

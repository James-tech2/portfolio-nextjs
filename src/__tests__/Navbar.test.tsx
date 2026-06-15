import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";
import { navbarlinks } from "../data/navbarLinks";

describe("Navbar component", () => {
  it("renders logo and a primary link", () => {
    render(<Navbar navbarlinks={navbarlinks} />);
    expect(screen.getByText(/JB/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar navbarlinks={navbarlinks} />);
    navbarlinks.forEach((link) => {
      expect(screen.getByText(new RegExp(link, "i"))).toBeInTheDocument();
    });
  });

  it("toggles mobile menu and shows menu items", () => {
    render(<Navbar navbarlinks={navbarlinks} />);
    const toggle = screen.getByLabelText(/Toggle menu/i);
    expect(toggle).toBeInTheDocument();
    fireEvent.click(toggle);
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
    navbarlinks.forEach((link) => {
      expect(
        screen.getByRole("menuitem", { name: new RegExp(link, "i") }),
      ).toBeInTheDocument();
    });
  });
});

"use client";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { navbarlinks } from "@/data/navbarLinks";

interface NavbarProps {
  navbarlinks: typeof navbarlinks;
}

const Navbar = ({ navbarlinks }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionID: string) => {
    const element = document.getElementById(sectionID.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconColor = isScrolled ? "#0f172a" : "#ffffff";
  const logoTextClass = isScrolled ? "text-slate-900" : "text-white";
  const navLinkClass = isScrolled
    ? "text-slate-800 hover:text-sky-600 relative group"
    : "text-white hover:text-sky-300 relative group";
  const mobileMenuBg = isScrolled
    ? "bg-white/95 text-slate-900"
    : "bg-black/80 text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg dark:bg-slate-900/80"
          : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-110 group"
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 ${
              isScrolled
                ? "bg-sky-500 text-white"
                : "bg-gradient-to-r from-sky-500 to-purple-500 text-white"
            } group-hover:shadow-lg group-hover:shadow-sky-500/50`}
          >
            JB
          </div>
          <span
            className={`font-bold tracking-wide hidden sm:inline transition-all duration-300 ${logoTextClass}`}
          >
            James Black
          </span>
        </button>

        {/* Desktop Links */}
        <div className="ml-auto hidden md:flex gap-6 items-center">
          {navbarlinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-all duration-200 cursor-pointer font-medium relative ${navLinkClass}`}
              aria-label={`Jump to ${item} section`}
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 w-0 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="ml-auto md:hidden">
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((s) => !s)}
            className="transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? (
              <ExitToAppIcon sx={{ color: iconColor }} />
            ) : (
              <MenuIcon sx={{ color: iconColor }} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`absolute right-4 top-16 md:hidden flex flex-col gap-2 p-3 rounded-lg shadow-lg backdrop-blur-md transition-all duration-300 ${mobileMenuBg}`}
            role="menu"
            aria-label="Mobile Navigation"
          >
            {navbarlinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-left w-full capitalize px-3 py-2 rounded-md transition-all duration-150 font-medium relative group ${
                  isScrolled
                    ? "hover:bg-sky-100 hover:text-sky-700"
                    : "hover:bg-white/10 hover:text-sky-300"
                }`}
                role="menuitem"
                aria-label={`Jump to ${item} section`}
              >
                {item}
                <span className="absolute bottom-1 left-3 h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 w-0 group-hover:w-[calc(100%-24px)] transition-all duration-300" />
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

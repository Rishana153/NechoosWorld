import { useState } from "react";
import logo from "../assets/images/logo/NWlogo.jpeg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo / Business Name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          {/* Replace this text with the actual logo later */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center">
            <img
            src={logo}
            alt="NechoosWorld logo"
            className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-bold tracking-wide text-white sm:text-xl">
              NECHOO'S WORLD
            </h1>

            <p className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-amber-400 sm:block">
              Chip Level Service
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-amber-400"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-amber-400"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-amber-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-amber-400"
          >
            Contact
          </a>

          {/* Call Button */}
          <a
            href="tel:+919562830655"
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-200 transition hover:bg-white/10 hover:text-amber-400 md:hidden"
        >
          {isMenuOpen ? (
            /* X icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-2">

            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-amber-400"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-amber-400"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-amber-400"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-gray-200 transition hover:bg-white/5 hover:text-amber-400"
            >
              Contact
            </a>

            <a
              href="tel:+919562830655"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-amber-400 px-5 py-3 text-center font-semibold text-black transition hover:bg-amber-300"
            >
              Call Now
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
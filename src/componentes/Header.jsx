import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <header
      id="header"
      className={`w-full px-10 md:px-15 py-4 flex justify-between items-center sticky top-0 left-0 z-50 relative ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"
      }`}
    >
      <h1 className="text-xl font-bold text-orange-500 flex">
        Gourmet<span className="text-black">On</span>
      </h1>
      <nav>
        <ul className="hidden md:flex space-x-4 z-10">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#funcionalidades">Funcionalidades</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#formulario">Contato</a>
          </li>
        </ul>
        <button
          className="md:hidden flex items-center p-2 border border-orange-500 rounded text-orange-500"
          id="menu-button" onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div
        className="md:hidden absolute top-16 right-0 bg-white w-full p-4 shadow-lg rounded-lg hidden"
        id="mobile-menu"
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <a href="#inicio" onClick={toggleMenu}>Início</a>
          </li>
          <li>
            <a href="#sobre" onClick={toggleMenu}>Sobre</a>
          </li>
          <li>
            <a href="#funcionalidades" onClick={toggleMenu}>Funcionalidades</a>
          </li>
          <li>
            <a href="#depoimentos" onClick={toggleMenu}>Depoimentos</a>
          </li>
          <li>
            <a href="#formulario" onClick={toggleMenu}>Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

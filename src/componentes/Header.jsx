import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="w-full px-10 md:px-15 py-4 bg-white text-black flex justify-between items-center shadow-md fixed top-0 left-0 z-50">
      <h1 className="text-xl font-bold text-orange-500 flex">
        Food <span className="text-black">App</span>
      </h1>
      <nav>
        <ul className="hidden md:flex space-x-4 z-10">
          <li>
            <a href="#home">Início</a>
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
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <button className="md:hidden flex items-center p-2 border border-orange-500 rounded text-orange-500">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

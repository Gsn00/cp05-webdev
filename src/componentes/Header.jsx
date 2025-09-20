export default function Header() {
  return (
    <header className="w-full px-15 py-4 bg-white text-black flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-orange-500 flex">Food <span className="text-black">App</span></h1>
      <nav>
        <ul className="flex space-x-4" >
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
      </nav>
    </header>
  );
}

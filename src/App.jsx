import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Sobre from "./componentes/Sobre";
import Funcionalidades from "./componentes/Funcionalidades";
import Depoimentos from "./componentes/Depoimentos";
import { useEffect, useState } from "react";

function App() {
  const [comidas, setComidas] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=5&apiKey=37840454665b4fd097a206663046197f"
    )
      .then((response) => response.json())
      .then((data) => {
        setComidas(data.results);
        console.log(data.results);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Sobre />
      <Funcionalidades />
      <Depoimentos />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;

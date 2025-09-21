import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Sobre from "./componentes/Sobre";
import Funcionalidades from "./componentes/Funcionalidades";
import Depoimentos from "./componentes/Depoimentos"

function App() {
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

import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Sobre from "./componentes/Sobre";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Sobre />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;

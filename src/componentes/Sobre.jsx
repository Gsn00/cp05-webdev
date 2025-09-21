import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Sobre() {
  return (
    <section
      className="w-full py-20 bg-white flex px-20 gap-10 flex-wrap"
      id="Sobre"
    >
      <h1 className="text-4xl font-bold text-center w-full">Sobre o FoodApp</h1>
      <p className="text-center w-full">
        Conheça o aplicativo que está revolucionando a forma como as pessoas
        pedem comida online.
      </p>
      <div className="flex">
        <div className="w-[50%] flex flex-col gap-5 justify-center">
          <h2 className="text-2xl font-bold">Um novo jeito de pedir comida</h2>
          <p className="text-gray-500">
            O FoodApp foi desenvolvido pensando em oferecer a melhor experiência
            possível para os amantes de gastronomia. Com uma interface intuitiva
            e um processo de pedido simplificado, você pode receber sua comida
            favorita em poucos minutos.
          </p>
          <p className="text-gray-500">
            Nossa plataforma conecta você aos melhores restaurantes da sua
            região, oferecendo uma variedade incrível de opções para todos os
            gostos e ocasiões
          </p>
          <div className="grid grid-cols-2 gap-5">
            <p>
              <span className="text-orange-500 mr-2">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Pedidos em menos de 3 cliques
            </p>
            <p>
              <span className="text-orange-500 mr-2">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Entrega em até 30 minutos
            </p>
            <p>
              <span className="text-orange-500 mr-2">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Mais de 1000 restaurantes
            </p>
            <p>
              <span className="text-orange-500 mr-2">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Promoções exclusivas
            </p>
          </div>
        </div>
        <div className="w-[50%] text-center">
          <img src="/imgs/sobre.jpg" alt="" className="w-full"/>
        </div>
      </div>
    </section>
  );
}

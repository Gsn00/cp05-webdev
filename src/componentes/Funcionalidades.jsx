export default function Funcionalidades() {
  return (
    <section
      className="w-full py-20 flex px-20 gap-10 flex-wrap bg-[#fff9f6]"
      id="Funcionalidades"
    >
      <h1 className="text-4xl font-bold text-center w-full relative">
        <div className="absolute inset-0 bg-orange-500 h-1 rounded-full mx-auto top-1/2 transform w-[50px] top-[140%]"></div>
        Funcionalidades Principais
      </h1>
      <p className="text-center w-full text-gray-500">
        Descubra como nosso aplicativo torna o processo de pedir comida mais
        fácil, rápido e agradável.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
        <div className="flex flex-col items-center p-5 rounded-lg shadow-sm transition-shadow duration-300 text-center bg-white">
          <img
            src="/imgs/funcionalidade__1.jpg"
            alt="Funcionalidade 1"
            className="w-16 h-16 mb-4"
          />
          <h2 className="font-bold text-xl mb-3">Entrega Rápida</h2>
          <p className="text-gray-400">
            Receba seu pedido em tempo recorde com nosso sistema otimizado de
            logística e parcerias com entregadores locais.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 rounded-lg shadow-sm transition-shadow duration-300 text-center bg-white">
          <img
            src="/imgs/funcionalidade__2.jpg"
            alt="Funcionalidade 2"
            className="w-16 h-16 mb-4"
          />
          <h2 className="font-bold text-xl mb-3">Variedade de Restaurantes</h2>
          <p className="text-gray-400">
            Acesse uma ampla seleção de restaurantes desde fast food até alta
            gastronomia, tudos em um só lugar.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 rounded-lg shadow-sm transition-shadow duration-300 text-center bg-white">
          <img
            src="/imgs/funcionalidade__3.jpg"
            alt="Funcionalidade 3"
            className="w-16 h-16 mb-4"
          />
          <h2 className="font-bold text-xl mb-3">Pagamentos Fácil</h2>
          <p className="text-gray-400">
            Múltiplias opções de pagamento seguro, incluindo cartão de crédito,
            débito, PIX e até mesmo dinheiro na entrega.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 rounded-lg shadow-sm transition-shadow duration-300  text-center bg-white">
          <img
            src="/imgs/funcionalidade__4.jpg"
            alt="Funcionalidade 4"
            className="w-16 h-16 mb-4"
          />
          <h2 className="font-bold text-xl mb-3">Promoções Exclusivas</h2>
          <p className="text-gray-400">
            Acesse cupons e ofertas especiais diariamente, economizando em cada
            pedido que você fizer.
          </p>
        </div>
      </div>
    </section>
  );
}

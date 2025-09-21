export default function Hero() {
  return (
    <section id="inicio" className="w-full py-20 bg-[#fff9f6] flex flex-col md:flex-row px-20 gap-10">
      <div className="w-full md:w-[50%] flex flex-col gap-5 justify-center">
        <h1 className="text-4xl font-bold">Seu app de comida favorito!</h1>
        <p>
          Descubra uma nova forma de pedir sua comida pavorita com nosso
          aplicativo intuitivo e rapido. Receba as melhores refeições de
          restaurantes locais diretamente na sua porta.
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-[20px] w-[200px] font-bold shadow-orange-500/50 shadow-lg hover:bg-orange-600 cursor-pointer mx-auto md:mx-0">
          Baixar Agora
        </button>
      </div>
      <div className="w-full md:w-[50%] flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="w-full md:w-[50%] grid grid-cols-2 gap-2">
          <img
            src="/imgs/image__1.png"
            alt="Imagem 1"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/imgs/image__2.png"
            alt="Imagem 2"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/imgs/image__2.png"
            alt="Imagem 3"
            className="w-full h-auto object-cover rounded-lg"
          />
          <img
            src="/imgs/image__1.png"
            alt="Imagem 4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <img src="/imgs/image__3.PNG" alt="Imagem 3" className="w-[250px]" />
      </div>
    </section>
  );
}

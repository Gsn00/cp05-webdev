export default function Depoimentos() {
  return (
    <section className="w-full bg-white px-20 py-20">
      <h1 className="text-4xl font-bold text-center w-full relative mb-10">
        <div className="absolute inset-0 bg-orange-500 h-1 rounded-full mx-auto transform w-[50px] top-[140%]"></div>
        O que nossos clientes dizem?
      </h1>
      <p className="text-center w-full text-gray-500">
        Veja as experiências de quem já usa o FoodApp no dia a dia
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
        <div className="p-10 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <div className="flex gap-5">
            <img src="/imgs/imagem.png" alt="" />
            <div className="text-left">
              <h2 className="font-bold text-xl ml-3">Ana Silva</h2>
              <img src="/imgs/imagem2.png" alt="" />
            </div>
          </div>
          <i className="text-gray-500 ">
            "Uso o FoodApp a mais de um ano e nunca tive problemas. A entrega é
            sempre rápida e a comida chega quentinha. As promoções são um
            diferencial incrível"
          </i>
        </div>
        <div className="p-10 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <div className="flex gap-5">
            <img src="/imgs/imagem.png" alt="" />
            <div className="text-left">
              <h2 className="font-bold text-xl ml-3">Carlos Mendes</h2>
              <img src="/imgs/imagem2.png" alt="" />
            </div>
          </div>
          <i className="text-gray-500 ">
            "O que mais é gostoso no FoodApp é a variedades de restaurantes
            disponíveis. Sempre encontro exatamente o que estou com vontade de
            comer, não importa a hora do dia."
          </i>
        </div>
        <div className="p-10 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <div className="flex gap-5">
            <img src="/imgs/imagem.png" alt="" />
            <div className="text-left">
              <h2 className="font-bold text-xl ml-3">Juliana Costa</h2>
              <img src="/imgs/imagem2.png" alt="" />
            </div>
          </div>
          <i className="text-gray-500 ">
            "O suporte ao cliente é excelente! Tive um problema com o pedido e eles resolveram em minutos. Além disso, o app é super intuitivo e fácil."
          </i>
        </div>
      </div>
    </section>
  );
}

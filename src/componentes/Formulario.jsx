export default function Formulario() {
  return (
    <section id="Formulario" className="py-10 bg-[#fff9f6]">
      <form className="w-full max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Formulário de Contato</h2>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium mb-2">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            className="border border-gray-300 p-2 w-full rounded-md"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-[20px] hover:bg-orange-600 w-full md:w-auto cursor-pointer font-bold shadow-orange-500/50 shadow-lg"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

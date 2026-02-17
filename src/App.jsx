import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Transforme seu negócio online</h1>
        <p className="text-xl mb-8">A melhor solução para aumentar suas vendas e engajamento</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">Comece Agora</button>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-100 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Consultoria de Marketing</h3>
            <p>Estratégias personalizadas para aumentar seu público e conversão.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Design Profissional</h3>
            <p>Criação de identidade visual e peças que encantam seus clientes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">Campanhas Digitais</h3>
            <p>Planejamento e execução de anúncios que realmente geram resultados.</p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <p>"Com a ajuda dessa equipe, nossas vendas cresceram 50% em apenas 3 meses!"</p>
            <span className="block mt-4 font-semibold">- João Silva</span>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <p>"Profissionalismo e resultados reais, recomendo sem dúvidas."</p>
            <span className="block mt-4 font-semibold">- Maria Souza</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Pronto para crescer seu negócio?</h2>
        <p className="mb-8">Entre em contato conosco hoje mesmo e transforme suas vendas!</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">Fale Conosco</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        &copy; 2026 Sua Empresa. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;

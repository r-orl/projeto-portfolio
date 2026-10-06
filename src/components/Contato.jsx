import './Contato.css';

function Contato() {
  return (
    <section id="contato" className="contato-container">
      <h2 className="contato-titulo">Vamos Conversar?</h2>
      <p className="contato-descricao">
        Atualmente estou aberto a novas oportunidades e projetos. 
        Sinta-se à vontade para me mandar uma mensagem!
      </p>
      
      <div className="contato-links">
        {/* O mailto: abre o programa de e-mail padrão do utilizador */}
        <a href="mailto:seu-email@exemplo.com" className="btn-contato">
          Enviar E-mail
        </a>
        
        {/* O target="_blank" abre numa nova aba. O rel="noopener noreferrer" é uma regra de segurança do React sempre que usamos o target="_blank" */}
        <a href="https://github.com/r-orl" target="_blank" rel="noopener noreferrer" className="btn-contato">
          GitHub
        </a>
        
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="btn-contato">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contato;
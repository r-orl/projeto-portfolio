import './Hero.css';
import minhaFoto from '../assets/eu.png'; 

function Hero() {
  return (
    <section id="hero" className="hero-container">
      
      <div className="hero-content">
        <h1 className="hero-title">Olá, eu sou o Ricardo Limeira</h1>
        <h2 className="hero-subtitle">Desenvolvedor Web & Mobile</h2>
        <p className="hero-description">
          Sou um estudante de tecnologia apaixonado por criar soluções inovadoras. 
          Tenho experiência com JavaScript, React Native e desenvolvimento de interfaces modernas.
        </p>
        
        <div className="hero-buttons">
          {/* Trocamos <button> por <a> e adicionamos o href apontando para os IDs */}
          <a href="#projetos" className="btn-primary">Ver Projetos</a>
          <a href="#contato" className="btn-secondary">Entrar em Contato</a>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={minhaFoto} alt="Foto de Ricardo Limeira" className="hero-image" />
      </div>

    </section>
  );
}

export default Hero;
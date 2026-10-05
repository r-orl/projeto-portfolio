import './Hero.css';

function Hero() {
  return (
    <section className="hero-container">
      <h1 className="hero-title">Olá, eu sou o Ricardo Limeira</h1>
      <h2 className="hero-subtitle">Desenvolvedor Web & Mobile</h2>
      <p className="hero-description">
        Sou um estudante de tecnologia apaixonado por criar soluções inovadoras. 
        Tenho experiência com JavaScript, React Native e desenvolvimento de interfaces modernas.
      </p>
      
      <div className="hero-buttons">
        <button className="btn-primary">Ver Projetos</button>
        <button className="btn-secondary">Entrar em Contato</button>
      </div>
    </section>
  );
}

export default Hero;
import './Habilidades.css';

function Habilidades() {
  // 1. Criamos o nosso Array (lista) de habilidades
  const minhasHabilidades = [
    'JavaScript', 
    'TypeScript', 
    'React', 
    'React Native', 
    'Expo', 
    'Google Apps Script', 
    'Figma',
    'UI/UX'
  ];

  return (
    <section id="habilidades" className="habilidades-container">
      <h2 className="habilidades-titulo">Minhas Habilidades</h2>
      
      <div className="habilidades-lista">
        {/* 2. Usamos o .map() para criar as etiquetas automaticamente */}
        {minhasHabilidades.map((habilidade, index) => (
          <span key={index} className="habilidade-item">
            {habilidade}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;
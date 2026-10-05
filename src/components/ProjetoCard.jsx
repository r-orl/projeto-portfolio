// Adicionamos a palavra 'imagem' aqui nos parênteses
function ProjetoCard({ titulo, descricao, tecnologias, imagem }) {
  return (
    <div className="projeto-card">
      
      {/* RENDERIZAÇÃO CONDICIONAL: 
          Lê-se: "Se a variável imagem existir (&&), então crie a tag <img />" */}
      {imagem && <img src={imagem} alt={`Imagem do projeto ${titulo}`} className="projeto-imagem" />}
      
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <span className="projeto-techs">{tecnologias}</span>
    </div>
  );
}

export default ProjetoCard;
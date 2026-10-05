// 1. Importamos o arquivo de CSS para que o React aplique os estilos
import './Navbar.css';

function Navbar() {
  return (
    // 2. Trocamos o <nav> simples por <nav className="navbar">
    <nav className="navbar">
      <h2>Meu Portfólio</h2>
      
      {/* 3. Adicionamos a className para a lista */}
    <ul className="navbar-links">
        {/* Transformamos os textos em links <a> apontando para os IDs (#) */}
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
    </ul>
    </nav>
  );
}

export default Navbar;
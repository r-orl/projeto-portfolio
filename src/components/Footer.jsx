import './Footer.css';

function Footer() {
  // Vamos usar o JavaScript para pegar o ano atual automaticamente!
  // Assim você não precisa lembrar de atualizar o site todo réveillon.
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p>&copy; {anoAtual} Ricardo Limeira. Desenvolvido com React.</p>
    </footer>
  );
}

export default Footer;
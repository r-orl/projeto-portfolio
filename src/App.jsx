import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer'; // Import do Footer

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer /> {/* O rodapé fechando a página! */}
    </div>
  );
}

export default App;
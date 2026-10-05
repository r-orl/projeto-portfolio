import './Projetos.css';
import ProjetoCard from './ProjetoCard';

// 1. Importamos as imagens dando um "nome de variável" para elas
import imgLembreMed from '../assets/LembreMed.png'; // Ajuste a extensão se for .jpg
import imgInfraCash from '../assets/InfraCash.png';

function Projetos() {
  const meusProjetos = [
    {
      titulo: 'LembreMed - Aplicativo de Lembretes de Medicação',
      descricao: 'Aplicativo mobile para gerenciamento de lembretes de medicação.',
      tecnologias: 'React Native, Expo, TypeScript, Figma',
      imagem: imgLembreMed // 2. Colocamos a variável da imagem aqui!
    },
    {
      titulo: 'Sistema de Gestão de Biblioteca',
      descricao: 'Aplicação web para catálogo de livros, registro de empréstimos e geração de QR Code.',
      tecnologias: 'Google Apps Script, HTML, CSS'
      // 3. Este projeto não tem imagem, então simplesmente não colocamos a propriedade 'imagem'
    },
    {
      titulo: 'Hub Financeiro de Infraestrutura - InfraCash',
      descricao: 'Aplicativo mobile desenvolvido como projeto de faculdade para gestão financeira.',
      tecnologias: 'React Native, Expo, TypeScript, Figma',
      imagem: imgInfraCash // Colocamos a imagem do Infracash aqui!
    }
  ];

  return (
    <section id="projetos" className="projetos-container">
      <h2 className="projetos-titulo">Meus Projetos</h2>
      
      <div className="projetos-grid">
        {meusProjetos.map((projeto, index) => (
          <ProjetoCard 
            key={index} 
            titulo={projeto.titulo} 
            descricao={projeto.descricao} 
            tecnologias={projeto.tecnologias}
            imagem={projeto.imagem} /* 4. Passamos a imagem como prop para o Card */
          />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiPython,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description: "Linguagem de marcação para estruturar e criar conteúdo em páginas da web.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description: "Estilização de páginas da web, com recursos avançados como animações e transições.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description: "Linguagem de programação para adicionar interatividade e comportamento dinâmico nas páginas web.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: <DiMysql />,
    description: "Sistema de gerenciamento de banco de dados relacional de código aberto.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description: "Biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis.",
  },
  {
    id: "python",
    name: "Python",
    icon: <DiPython className="python-icon" />,
    description: "Linguagem de programação versátil utilizada em desenvolvimento web, ciência de dados e automação.",
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p className="tech-description">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;

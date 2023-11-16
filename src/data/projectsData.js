import Coffee from "../images/Coffee.jpg";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Nina Carducci",
    description:
      "Le challenge était d'optimiser le site de la photographe Nina Carducci. Il a fallu reprendre l'ensemble de ses photos et les optimiser pour le web. J'ai également pris le temps de réaliser un référencement local afin d'améliorer sa visibilité auprès de clients potentiels. Amélioration du SEO.",
    technologies: ["React ", "CSS ", "Lighthouse ", "Wave "],
    client: "OpenClassrooms",
    source: Coffee,
    name: "Project 9",
    github: "https://github.com/Leo-LC/projet_09",
    website: null,
  },
  {
    id: 2,
    title: "Débug Application Reac",
    description:
      "Le client possédait déjà un site de présentation de ses projets. En revance, celui-ci comportait plusieurs soucis et 'bugs' techniques qu'il a fallu identifier et corriger",
    technologies: ["React", "Browser Devtools"],
    client: "OpenClassrooms",
    source: Coffee,
    name: "Project 2",
    github: "https://github.com/Leo-LC/projet_10",
    website: null,
  },
  {
    id: 3,
    title: "Argent Bank",
    description:
      "Double challenge ici. Dans un premier temps, se servir des wireframes et de la base de donneé existante pour réaliser les appels à l'API pour les requêtes stipulées par le client. Dans un second temps, il a fallu créer des routes API pour de futures fonctionnalités en respectant les principes existants.",
    technologies: ["Javascript", "React", "CSS"],
    client: "OpenClassrooms",
    source: Coffee,
    name: "Project 3",
    github: "https://github.com/Leo-LC/projet_11",
    website: null,
  },
];

export default projectsData;

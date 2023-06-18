import tukimarket from "./assets/tukimarket.png";
import carRental from "./assets/car-rental.png";
import shoesShop from "./assets/shoes-shop.png";
import portfolio from "./assets/portfolio.png";

const projects = [
  {
    name: "This website!",
    description: "This website was built with React.js and CSS3. It features a contact form, a chatbot and a responsive design. It is hosted on Netlify and the contact form is powered by Formspree.",
    technologies: ["React.js", "CSS3","Formspree", 'Brain.js'],
    link: "https://tomassandoval.netlify.app/",
    image: portfolio,
    github: "https://github.com/TomSandoval/Portfolio",
    active: true,
  },
  {
    name: "TukiMarket",
    description: "TukiMarket is an e-commerce website built with React.js and Express.js. It features a secure payment gateway, third-party authorization, an admin dashboard, and media file management. It provides a seamless shopping experience and serves as a comprehensive solution for online businesses.",
    technologies: ["React.js", "Express.js", "Material-UI", "PostgreSQL", "Node.js"],
    link: "https://tukimarket.netlify.app",
    image: tukimarket,
    github: "https://github.com/TomSandoval/Proyecto-Final",
    active: true,
  },
  {
    name: "Car rental",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur fugiat fuga et totam numquam nihil quia minima iusto, exercitationem, blanditiis provident doloremque commodi maiores, similique ullam autem distinctio deserunt?",
    technologies: ["React.js", "GraphQL", "Material-UI", "PostgreSQL", "Node.js"],
    link: "",
    image: carRental,
    github: "",
    active: false,
  },
  {
    name: "Shoes shop",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur fugiat fuga et totam numquam nihil quia minima iusto, exercitationem, blanditiis provident doloremque commodi maiores, similique ullam autem distinctio deserunt?",
    technologies: ["Next.js", "GraphQL", "Material-UI", "PostgreSQL", "Node.js"],
    link: "",
    image: shoesShop,
    github: "",
    active: false,
  },
];


export default projects;

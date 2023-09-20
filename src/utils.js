import tukimarket from "./assets/tukimarket.png";
import carRental from "./assets/car-rental.png";
import shoesShop from "./assets/shoe-shop.png";
import portfolio from "./assets/portfolio.png";

const projects_en = [
  {
    name: "This website!",
    description: "This website was built with React.js and CSS3. It features a contact form, a chatbot and a responsive design. It is hosted on Netlify and the contact form is powered by Formspree.",
    technologies: ["React.js", "CSS3","Formspree"],
    link: "https://tomassandoval.netlify.app/",
    image: portfolio,
    github: "https://github.com/TomSandoval/Portfolio",
    active: true,
  },
  {
    name: "Shoes shop",
    description: "Shoes Shop is an online sneaker store that features an internal management system, automating tasks such as stock management, email sending, purchase control, etc. It was developed using Next.js and utilizes MongoDB as the database. The platform includes user authentication and authorization provided by Auth0.",
    technologies: ["Next.js", "MONGODB", "Auth0", "Three.js", "Sendgrid"],
    link: "https://shoe-shop-five.vercel.app/",
    image: shoesShop,
    github: "https://github.com/TomSandoval/shoe-shop",
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
];

const projects_es = [
  {
    name: "Este sitio!",
    description: "Este sitio web fue construido con React.js y CSS3. Cuenta con un formulario de contacto, un chatbot y un diseño responsive. Está alojado en Netlify y el formulario de contacto utiliza Formspree.",
    technologies: ["React.js", "CSS3","Formspree"],
    link: "https://tomassandoval.netlify.app/",
    image: portfolio,
    github: "https://github.com/TomSandoval/Portfolio",
    active: true,
  },
  {
    name: "Shoes shop",
    description: "Shoes shop es una tienda online de zapatillas que cuenta con un sistema de gestion interno, automatiza tareas como gestion de stock, envio de email, control de compras, etc. Fue desarrollado con Next.js y utiliza MongoDB como base de datos, cuenta con autenticacion y autorizacion de usuarios por parte de Auth0",
    technologies: ["Next.js", "MONGODB", "Auth0", "Three.js", "Sendgrid"],
    link: "https://shoe-shop-five.vercel.app/",
    image: shoesShop,
    github: "https://github.com/TomSandoval/shoe-shop",
    active: true,
  },
  {
    name: "TukiMarket",
    description: "TukiMarket es un sitio web de comercio electrónico construido con React.js y Express.js. Cuenta con una pasarela de pago segura, autorización de terceros, un panel de administración y gestión de archivos multimedia. Proporciona una experiencia de compra sin problemas y sirve como una solución integral para negocios en línea.",
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
];

export  {projects_en, projects_es};

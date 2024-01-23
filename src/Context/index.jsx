import { createContext, useState, useEffect } from "react";

const PortContext = createContext();

const PortProvider = ({ children }) => {

  const [isLightMode, setIsLightMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const clickLightMode = () => {
    setIsLightMode(true);
    setIsDarkMode(false);
    console.log("ligh",isLightMode);
    console.log("Dark",isDarkMode);
  };
  const clickDarkMode = () => {
    setIsDarkMode(true);
    setIsLightMode(false);
    console.log("Dark",isDarkMode);
    console.log("ligh",isLightMode);
  };

   //menu mobile open/close
   const [isMenuMbOpen, setIsMenuMbOpen] = useState(false);
   const toggleMenuMb = () => setIsMenuMbOpen(!isMenuMbOpen);
  
  const listProjects = [
    {
      id:1,
      title:'E-Commerce Page',
      image:'./img/Ecommerce.png',
      dev:['./svg/vite.svg','./svg/react.svg','./svg/sass.svg'],
      linkPage:'https://ingdonovan.github.io/e-commerce-react-sass/',
      linkCode:'https://github.com/IngDonovan/broch-page',
    },
    {
      id:2,
      title:'Brochure Page',
      image:'./img/Broch-page.png',
      dev:['./svg/vite.svg','./svg/react.svg','./svg/sass.svg'],
      linkPage:'https://ingdonovan.github.io/broch-page/',
      linkCode:'https://github.com/IngDonovan/broch-page',
    },
    {
      id:3,
      title:'Satellite Tracker Project',
      image:'./img/Space-Track.png',
      dev:['./svg/vite.svg','./svg/vanilla.svg','./svg/sass.svg'],
      linkPage:'https://ingdonovan.github.io/space-track/',
      linkCode:'https://github.com/IngDonovan/space-track',
    },
    {
      id:4,
      title:'Travel with Tailwind',
      image:'./img/Travel-Tailwind.png',
      dev:['./svg/vite.svg','./svg/react.svg','./svg/Tailwind.svg'],
      linkPage:'https://ingdonovan.github.io/travel-tailwind/',
      linkCode:'https://github.com/IngDonovan/travel-tailwind',
    },
    {
      id:5,
      title:'Todo Page',
      image:'./img/Todo.png',
      dev:['./svg/vite.svg','./svg/react.svg','./svg/Tailwind.svg'],
      linkPage:'https://ingdonovan.github.io/todo-viteReactSass/',
      linkCode:'https://github.com/IngDonovan/todo-viteReactSass',
    },
    {
      id:6,
      title:'Landing Page',
      image:'./img/Landing-page.png',
      dev:['./svg/Html.svg','./svg/JS.svg','./svg/sass.svg'],
      linkPage:'https://ingdonovan.github.io/sass-landing-page/',
      linkCode:'https://github.com/IngDonovan/sass-landing-page',
    },
    {
      id:7,
      title:'Movie Project',
      image:'./img/Movies-proyect.png',
      dev:['./svg/Html.svg','./svg/JS.svg','./svg/css.svg'],
      linkPage:'https://ingdonovan.github.io/movies-proyect/',
      linkCode:'https://github.com/IngDonovan/movies-proyect',
    },
    {
      id:8,
      title:'Random Cat with Js',
      image:'./img/CataleaJS.png',
      dev:['./svg/Html.svg','./svg/JS.svg','./svg/css.svg'],
      linkPage:'https://ingdonovan.github.io/CatAleaJS/',
      linkCode:'https://github.com/IngDonovan/CatAleaJS',
    },
    {
      id:9,
      title:'Async Landing Page',
      image:'./img/landing-async.png',
      dev:['./svg/Html.svg','./svg/JS.svg','./svg/css.svg'],
      linkPage:'https://ingdonovan.github.io/landing-async/',
      linkCode:'https://github.com/IngDonovan/landing-async',
    },
    {
      id:10,
      title:'VideoGame with JS',
      image:'./img/videoGameJS.png',
      dev:['./svg/Html.svg','./svg/JS.svg','./svg/css.svg'],
      linkPage:'https://ingdonovan.github.io/VideoJuego-JS/',
      linkCode:'https://github.com/IngDonovan/VideoJuego-JS',
    },
    {
      id:11,
      title:'Proyect Batatabit',
      image:'./img/Batatabit.png',
      dev:['./svg/Html.svg','./svg/JS.svg','./svg/css.svg'],
      linkPage:'https://ingdonovan.github.io/ProyBatatabit/',
      linkCode:'https://github.com/IngDonovan/ProyBatatabit',
    },
  ];
  const listPersonal = [
    {
      id:1,
      person:{
        summary:"I'm Frontend Developer with a solid foundation in React, Vite.js, Sass, Tailwind, Node.js, and proficiency in using npm and Git. Eager to learn and passionate about creatingefficient and dynamic user interfaces. Dedicated to delivering high-quality, responsive web applications. Actively seeking opportunities to enhance my skills and make valuable contributions to your company.",
        title: "Personal Information",
        name:"Donovan",
        last:"Rojas",
        nationality:"Colombian",
        languages:["English","Spanish"],
        email:"rojasdrm03@gmail.com",
        number:"+573138707901"
      },
      skills:{
        title:"My Skills",
        html:"/svg/Html.svg",
        js:"/svg/JS.svg",
        css:"/svg/css.svg",
        react:"/svg/react.svg",
        viteJs:"/svg/vite.svg",
        sass:"/svg/sass.svg",
        nodejs:"/svg/Nodejs.svg",
        git:"/svg/Git.svg",
      },
      cv:{
        title:"CV",
        link:"https://drive.google.com/file/d/1u_CL7FFB2xLS1PITUII9hAVToIf5NPhl/view?usp=sharing",
      }

    }
  ];
  
  return (
    <PortContext.Provider
     value={{
      isLightMode,
      isDarkMode,
      clickLightMode,
      clickDarkMode,
      listProjects,
      listPersonal,
      isMenuMbOpen,
      setIsMenuMbOpen,
      toggleMenuMb,
     }}
    >
        {children}
    </PortContext.Provider>
  );
};

export { PortContext, PortProvider };

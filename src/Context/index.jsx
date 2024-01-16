import { createContext, useState, useEffect } from "react";

const PortContext = createContext();

const PortProvider = ({ children }) => {
  
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
      title:'Track Satellite Project',
      image:'./img/Space-Track.png',
      dev:['./svg/vite.svg','./svg/vanilla.svg','./svg/sass.svg'],
      linkPage:'https://ingdonovan.github.io/space-track/',
      linkCode:'https://github.com/IngDonovan/space-track',
    },
    {
      id:4,
      title:'Travel Page with Tailwind',
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
  
  return (
    <PortContext.Provider
     value={{
      listProjects,
     }}
    >
        {children}
    </PortContext.Provider>
  );
};

export { PortContext, PortProvider };

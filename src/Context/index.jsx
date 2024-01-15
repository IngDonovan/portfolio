import { createContext, useState, useEffect } from "react";

const PortContext = createContext();

const PortProvider = ({ children }) => {
  
  const listProyects = [
    {
      id:1,
      title:'E-Commerce',
      image:'./Ecommerce.png',
      dev:['./vite.svg','./react.svg','./sass.svg'],
      linkPage:'https://ingdonovan.github.io/e-commerce-react-sass/',
      linkCode:'https://github.com/IngDonovan/broch-page',
    },
    {
      id:2,
      title:'Broch-Page',
      image:'./Broch-page.png',
      dev:['./vite.svg','./react.svg','./sass.svg'],
      linkPage:'https://ingdonovan.github.io/broch-page/',
      linkCode:'https://github.com/IngDonovan/broch-page',
    },
    {
      id:3,
      title:'Space-Track',
      image:'./Space-Track.png',
      dev:['./vite.svg','./vanilla.svg','./sass.svg'],
      linkPage:'https://ingdonovan.github.io/space-track/',
      linkCode:'https://github.com/IngDonovan/space-track',
    },
    {
      id:4,
      title:'Travel-Tailwind',
      image:'./Travel-Tailwind.png',
      dev:['./vite.svg','./react.svg','./Tailwind.svg'],
      linkPage:'https://ingdonovan.github.io/travel-tailwind/',
      linkCode:'https://github.com/IngDonovan/travel-tailwind',
    },
    {
      id:5,
      title:'Todo-List',
      image:'./Todo.png',
      dev:['./vite.svg','./react.svg','./Tailwind.svg'],
      linkPage:'https://ingdonovan.github.io/todo-viteReactSass/',
      linkCode:'https://github.com/IngDonovan/todo-viteReactSass',
    },
    {
      id:6,
      title:'Landing-Page',
      image:'./Landing-page.png',
      dev:['./Html.svg','./JS.svg','./sass.svg'],
      linkPage:'https://ingdonovan.github.io/sass-landing-page/',
      linkCode:'https://github.com/IngDonovan/sass-landing-page',
    },
  ];
  
  return (
    <PortContext.Provider
     value={{
      listProyects,
     }}
    >
        {children}
    </PortContext.Provider>
  );
};

export { PortContext, PortProvider };

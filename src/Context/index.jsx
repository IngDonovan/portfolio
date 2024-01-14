import { createContext, useState, useEffect } from "react";

const PortContext = createContext();

const PortProvider = ({ children }) => {
  
  const listProyects = [
    {
      id:1,
      title:'E-Commerce',
      image:'./Ecommerce.png',
      dev:['ViteJs','React','Sass'],
      linkPage:'https://ingdonovan.github.io/e-commerce-react-sass/',
      linkCode:'https://github.com/IngDonovan/e-commerce-react-sass',
    },
    {
      id:2,
      title:'E-Commerce',
      image:'./Ecommerce.png',
      dev:['ViteJs','React','Sass'],
      linkPage:'https://ingdonovan.github.io/e-commerce-react-sass/',
      linkCode:'https://github.com/IngDonovan/e-commerce-react-sass',
    },
    {
      id:3,
      title:'E-Commerce',
      image:'./Ecommerce.png',
      dev:['ViteJs','React','Sass'],
      linkPage:'https://ingdonovan.github.io/e-commerce-react-sass/',
      linkCode:'https://github.com/IngDonovan/e-commerce-react-sass',
    },
    {
      id:4,
      title:'E-Commerce',
      image:'./Ecommerce.png',
      dev:['ViteJs','React','Sass'],
      linkPage:'https://ingdonovan.github.io/e-commerce-react-sass/',
      linkCode:'https://github.com/IngDonovan/e-commerce-react-sass',
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

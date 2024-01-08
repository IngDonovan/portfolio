import { createContext, useState, useEffect } from "react";

const PortContext = createContext();

const PortProvider = ({ children }) => {
  return (
    <PortContext.Provider
     value={{

     }}
    >
        {children}
    </PortContext.Provider>
  );
};

export { PortContext, PortProvider };

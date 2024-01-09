import { useContext } from "react";
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import { PortContext } from "../Context";
import Navbar from "../Components/Navbar";
import Home from '../Pages/Home';
import reactLogo from '../assets/react.svg';

const AppRoutes = () => {
   
    let routes = useRoutes ([
      {path: '/', element: <Home />},
    ]);
    return routes;
  }

function AppUI() {

    return(
        <>
            <BrowserRouter>
                <div className='container'>
                    <img src={reactLogo} className="logo" alt="React logo" />
                    <Navbar />
                    <AppRoutes />
                </div>
            </BrowserRouter>
        </>
    );
};

export default AppUI;
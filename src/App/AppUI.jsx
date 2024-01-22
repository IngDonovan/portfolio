import { useContext } from "react";
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import { PortContext } from "../Context";
import Navbar from "../Components/Navbar";
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';
import reactLogo from '../assets/react.svg';

const AppRoutes = () => {
   
    let routes = useRoutes ([
      {path: '/', element: <Home />},
      {path: '/portfolio', element: <Home />},
      {path: '/*', element: <NotFound />},
      {path: '/portfolio/about-me', element: <AboutMe />},
      {path: '/portfolio/contact', element: <Contact />},
    ]);
    return routes;
  }

function AppUI() {

    return(
        <>
            <BrowserRouter>
                <div className='container'>
                    <picture className="contentLogo">
                        <img src={reactLogo} className="logo" alt="React logo" />
                    </picture>

                    <Navbar />
                    <AppRoutes />
                </div>
            </BrowserRouter>
        </>
    );
};

export default AppUI;
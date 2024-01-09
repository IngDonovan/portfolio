import { useContext } from "react";
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import { PortContext } from "../Context";
import Navbar from "../Components/Navbar";
import reactLogo from '../assets/react.svg';


function AppUI() {

    return(
        <>
            <BrowserRouter>
                <div className='container'>
                    <img src={reactLogo} className="logo" alt="React logo" />
                    <Navbar />
                </div>
            </BrowserRouter>
        </>
    );
};

export default AppUI;
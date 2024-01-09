import { useState } from 'react';
import { PortProvider } from '../Context';
import AppUI from './AppUI';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';

function App() {

  return (
    <>
      <PortProvider>
        <div className='container'>
          <img src={reactLogo} className="logo" alt="React logo" />
          <AppUI />
        </div>
      </PortProvider>
    </>
  )
}

export default App

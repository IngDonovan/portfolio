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
        <AppUI />
      </PortProvider>
    </>
  )
}

export default App

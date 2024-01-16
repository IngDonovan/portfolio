import { useState } from 'react';
import { PortProvider } from '../Context';
import AppUI from './AppUI';

import viteLogo from '/svg/vite.svg';
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

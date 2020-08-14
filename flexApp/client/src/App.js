import React from 'react';
import { DrawerProvider } from "./contexts/DrawerContext";
import Routes from "./Routes";

import './App.css';

function App() {
  return (
    <div >
      <DrawerProvider>
         <Routes  />
      </DrawerProvider>
    </div>
  );
}

export default App;

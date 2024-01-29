import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Ejercicio1 } from './typescript/Ejercicio1';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Ejercicio1/>
  </React.StrictMode>
);



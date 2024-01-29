import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Ejercicio1 } from './typescript/Ejercicio1';
import { Ejercicio4 } from './typescript/Ejercicio4';
import { Ejercicio2 } from './typescript/Ejercicio2';
import { Ejercicio3 } from './typescript/Ejercicio3';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Ejercicio1/>*/}
    {/*<Ejercicio2/>*/}
    <Ejercicio3/>
    {/*<Ejercicio4/>*/}
    {/*<Ejercicio5/>*/}

  </React.StrictMode>
);



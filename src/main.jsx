import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './CounterApp';

/* 
Functional component se llaman de esta manera
por que si nos damos cuenta estan basados en 
funciones.
*/

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App 
          value = { 0 }  
        />
    </React.StrictMode>
);

/* 
Componentes siempre capitalizando la primera letra
de su nombre de esta manera sabemos que es un com
ponente.
*/
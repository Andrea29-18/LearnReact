import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './HelloWorldApp';
import { Tarea01 } from './Tarea01';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Tarea01 />
    </React.StrictMode>
);
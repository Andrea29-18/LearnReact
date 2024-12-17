import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from './HelloWorldApp';
// import { Tarea01 } from './Tarea01';
// import { Props } from './Props';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <Tarea01 /> */}
        {/* Este es un componente padre */}
        {/* <Props /> */}
        <CounterApp value={10} />
    </React.StrictMode>
);
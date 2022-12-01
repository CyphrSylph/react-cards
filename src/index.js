// 1) Import React & React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get reference to Root Div
const elm = document.getElementById('root');

// 3) Give React control of Root Div element
const root = ReactDOM.createRoot(elm);

// 4) Display app component on screen
root.render(<App />);
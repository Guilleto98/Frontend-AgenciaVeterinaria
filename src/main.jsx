import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import "./index.css"
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
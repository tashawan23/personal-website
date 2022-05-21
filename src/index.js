import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/fonts.css';
import './index.css'
import App from './App';
import { HashRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HashRouter>
 <Routes>
 <Route path="/" element={<App/>} />
 </Routes>
 </HashRouter>
  </React.StrictMode>
);


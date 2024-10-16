import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import ToDo from './pages/ToDo';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blockchain from "./pages/Blockchain";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Countries from './pages/Countries';
import Game from './pages/Game';


//const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
  
    <ToDo></ToDo>
  </React.StrictMode>
);
*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="blockchain" element={<Blockchain />} />
          <Route path="contact" element={<Contact />} />
          <Route path="countries" element={<Countries />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
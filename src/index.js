import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import ToDo from './pages/ToDo';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

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
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
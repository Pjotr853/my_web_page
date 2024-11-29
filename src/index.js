import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from "react-redux";
import store from './store';

import ToDo from './pages/ToDo';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blockchain from "./pages/Blockchain";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Countries from './pages/Countries';
import Snake from './pages/Snake';
import Mongo from './pages/Mongo';
import Currency from './pages/Currency';


import ReduxPage from './pages/reduxPage/ReduxPage';



//const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
  
    <ToDo></ToDo>
  </React.StrictMode>
);
*/

 function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="blockchain" element={<Blockchain />} />
          <Route path="countries" element={<Countries />} />
          <Route path="snake" element={<Snake />} />
          <Route path="mongo" element={<Mongo />} />
          <Route path="currency" element={<Currency />} />
          <Route path="redux" element={<ReduxPage />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
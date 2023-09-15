import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import logoHeader from './Resources/logo-header.png';
import Footer from './components/Footer/Footer';
import logoFooter from './Resources/logo-footer.png';
import Home from './layout/Home/Home';
import About from './layout/About/About';
import Error from './layout/Error/Error';
import AccomodationPage from './layout/AccomodationPage/accomodationPage';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
      
let navArray = [
  {name: "Accueil", link:"/"},
  {name: "About", link:"/about"}
];

root.render(
  <React.StrictMode>
    <Router>
      <Header navItems = {navArray} img={logoHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodationpage/:accomodationId" element={<AccomodationPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer text = "© 2020 Kasa. All rights reserved" img={logoFooter}/>
    </Router>
  </React.StrictMode>
)
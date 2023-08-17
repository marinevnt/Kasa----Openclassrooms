import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import AccomodationPage from './components/AccomodationPage/accomodationPage';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
      
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodationpage">
          <Route path=":accomodationId"  element={<AccomodationPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

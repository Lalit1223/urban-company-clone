import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
// import ServiceCard from './Components/ServiceCard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
      <HeroSection></HeroSection>
      {/* <ServiceCard></ServiceCard> */}
      <Footer />
    </Router>
  );
}

export default App;

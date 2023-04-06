import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

//Import components
import NavigationBar from '../components/navbar/navbar';
import HomePage from '../pages/homepage';
import AboutPage from '../pages/aboutpage';
import ContactPage from '../pages/contactpage';
import Footer from '../components/footer/footer';

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

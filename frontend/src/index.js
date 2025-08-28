import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/AboutPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import OpenAccount from './landing_page/OpenAccount';
import Hero from './landing_page/home/Hero';
import Awards from './landing_page/home/Awards';
import Stats from './landing_page/home/Stats';
import Pricing from './landing_page/pricing/PricingPage';
import Education from './landing_page/home/Education';
import NotFound from './landing_page/NotFound';
import Product from './landing_page/products/ProductPage';
import Support from './landing_page/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);

import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Features from "./pages/features/Features";
import Adventure from "./pages/adventure/Adventure";
import Contact from "./pages/contact/Contact";
import Life from "./pages/life/Life";

function Layouts() {
  return (
    <div>
      <BrowserRouter>
        <div className="head">
          <Header />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/life" element={<Life />} />
            <Route path="/adventures" element={<Adventure />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Layouts;

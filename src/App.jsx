import React from "react"; // ✅ ADD THIS LINE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Brand from "../pages/Brand";
import Contact from "../pages/Contact";

function App() {
  return (
    <Router>
      <Header />

      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
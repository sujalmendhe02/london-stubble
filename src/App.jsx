import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Brand from "../pages/Brand";
import Contact from "../pages/Contact";
// Pages
// function Home() {
//   return <HomePage />;
// }

// function Brand() {
//   return <h1 className="p-5 text-xl">Brand Style Page</h1>;
// }

// function Categories() {
//   return <h1 className="p-5 text-xl">Categories Page</h1>;
// }

// function Products() {
//   return <h1 className="p-5 text-xl">Products Page</h1>;
// }

// function About() {
//   return <h1 className="p-5 text-xl">About Us Page</h1>;
// }

function App() {
  return (
    <Router>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
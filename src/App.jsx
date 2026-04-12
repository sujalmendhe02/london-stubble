import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Pages
function Home() {
  return <h1 className="p-5 text-xl">Home Page</h1>;
}

function Brand() {
  return <h1 className="p-5 text-xl">Brand Style Page</h1>;
}

function Categories() {
  return <h1 className="p-5 text-xl">Categories Page</h1>;
}

function Products() {
  return <h1 className="p-5 text-xl">Products Page</h1>;
}

function About() {
  return <h1 className="p-5 text-xl">About Us Page</h1>;
}

function App() {
  return (
    <Router>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
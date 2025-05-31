import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import DiseaseDetection from "./pages/DiseaseDetection";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const { dark } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-all duration-300`}
    >
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detector" element={<DiseaseDetection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
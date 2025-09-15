import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Monitor from "./components/Monitor";
import OurFeature from "./components/OurFeature";
import Partner from "./components/Partner";
import Pricing from "./components/Pricing";
import Purpose from "./components/Purpose";
import Schedule from "./components/Schedule";
import Showcase from "./components/Showcase";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <main className="relative overflow-x-hidden min-h-screen">
        <div className="absolute top-0 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/90 to-blue-200/80 rounded-full blur-2xl -z-10"></div>
        <div className="overflow-hidden">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Showcase />
                  <Purpose />
                  <Partner />
                  <Schedule />
                  <Monitor />
                  <Pricing />
                  <OurFeature />
                  <Testimonial />
                  <Newsletter />
                  <Footer />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;

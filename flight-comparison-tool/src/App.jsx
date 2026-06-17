import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DatePrice from "./pages/DatePrice";
import AirlineCompare from "./pages/AirlineCompare";
import BaggagePolicy from "./pages/BaggagePolicy";
import OTPStats from "./pages/OTPStats";
import FilterPanel from "./pages/FilterPanel";
import LayoverInfo from "./pages/LayoverInfo";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/date-price" element={<DatePrice />} />
<Route path="/airline-compare" element={<AirlineCompare />} />
<Route path="/baggage-policy" element={<BaggagePolicy />} />
<Route path="/otp-stats" element={<OTPStats />} />
<Route path="/filter-panel" element={<FilterPanel />} />
<Route path="/layover-info" element={<LayoverInfo />} />
      </Routes>
    </Router>
  );
}

export default App;

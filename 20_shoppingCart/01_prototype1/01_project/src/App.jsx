import React from "react";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Accessories from "./pages/Accessories";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

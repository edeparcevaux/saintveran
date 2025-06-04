import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Explore, Home, Preview } from "./pages/index";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#121212] h-full overflow-y-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </div>
  );
};

export default App;

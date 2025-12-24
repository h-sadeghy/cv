import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CV from "./components/Cv";
import Work from "./components/Work";
import Certificates from "./components/Certificates";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import Gallery from "./components/Gallery";
import Order from "./components/Order";
import OrderDetails from "./components/OrderDetails";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/research" element={<Research />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/:id" element={<OrderDetails />} />
      </Routes>
    </div>
  );
}

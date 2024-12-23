import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./assets/Components/index";
import Home from "./assets/Components/Home";
import About from "./assets/Components/AboutUs";
import "./App.css";
import BTB from "./assets/Components/btb";
import Footer from "./assets/Components/footer";
import Booking from "./assets/Components/Booking";
import Royal from "./assets/Components/Royalplace";
import Kampongthom from "./assets/Components/Kampong";
import Kepkompot from "./assets/Components/Kep";
import Kohrong from "./assets/Components/Koh Rong";
import Team from "./assets/Components/Teammember";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Index />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/btb" element={<BTB />} />
          <Route path="/booking" element={<Booking />} />{" "}
          <Route path="/Royalplace" element={<Royal />} />
          <Route path="/Kampong" element={<Kampongthom />} />
          <Route path="/Kep" element={<Kepkompot />} />
          <Route path="/Koh Rong" element={<Kohrong />} />
          <Route path="/Teammember" element={<Team />} />
          {/* Name file first and then your new nameRathanak*/}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

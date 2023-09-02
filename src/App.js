import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import OfferRide from "./components/OfferRide";
import Rewards from "./components/Rewards";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/OfferRide" element={<OfferRide />} />
      <Route exact path="/Rewards" element={<Rewards />} />
      <Route exact path="/FAQ" element={<FAQ />} />
    </Routes>
  );
};
export default App;

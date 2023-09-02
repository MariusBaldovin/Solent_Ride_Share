import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import OfferRide from "./components/OfferRide";
import Rewards from "./components/Rewards";
import FAQ from "./components/FAQ";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/OfferRide" element={<OfferRide />} />
      <Route path="/Rewards" element={<Rewards />} />
      <Route path="/FAQ" element={<FAQ />} />
      // Catch all unmatched routes
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;

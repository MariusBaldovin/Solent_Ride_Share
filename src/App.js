import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  FAQ,
  Home,
  NavBar,
  OfferRide,
  Rewards,
  NotFound,
  Footer,
  Email,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/OfferRide" element={<OfferRide />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Email" element={<Email />} />
          // Catch all unmatched routes
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;

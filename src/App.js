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
  AboutUs,
  PrivacyPolicy,
  Support,
  SignUp,
  SignIn,
} from "./components";
import "./App.css";
import { AuthContextProvider } from "./components/context/Authcontext";
const App = () => {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/OfferRide" element={<OfferRide />} />
            <Route path="/Rewards" element={<Rewards />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Email" element={<Email />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            // Catch all unmatched routes
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthContextProvider>
        <Footer />
      </Router>
    </>
  );
};
export default App;

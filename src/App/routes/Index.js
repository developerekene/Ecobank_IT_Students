import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../UI/Pages/Home/HomePage";
import ProfilePage from "../UI/Pages/ProfilePage/ProfilePage";
import AboutUs from "../UI/Pages/AboutUs/AboutUs";
import Contact from "../UI/Pages/Contact/Contact";
import Navbar from "../UI/Components/NavBar/NavBar";

const Index = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default Index;

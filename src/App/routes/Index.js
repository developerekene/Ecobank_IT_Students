import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../UI/Pages/Home/HomePage";
import ProfilePage from "../UI/Pages/ProfilePage/ProfilePage";
import Navbar from "../UI/Components/NavBar/NavBar";
import SettingPage from "../UI/Pages/SettingPage/SettingPage";
import CoursePage from "../UI/Pages/CoursePage/CoursePage";

const Index = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/course-page" element={<CoursePage />} />
      <Route path="/setting-page" element={<SettingPage />} />
    </Routes>
  </BrowserRouter>
);

export default Index;

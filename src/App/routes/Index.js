import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../UI/Pages/Home/HomePage";
import ProfilePage from "../UI/Pages/ProfilePage/ProfilePage";
import Navbar from "../UI/Components/NavBar/NavBar";

const Index = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
    </BrowserRouter>
)

export default Index;
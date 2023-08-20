import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/UI/Sidebar";
import Layout from "./components/Layout";
import UploadPhoto from "./pages/UploadPhoto";
import Explore from "./pages/Explore";
import Sharing from "./pages/Sharing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Recursion from "./pages/Recursion";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recur" element={<Recursion />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload-image" element={<UploadPhoto />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/sharing" element={<Sharing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import About from "../Pages/About";
import AddBlog from "../Pages/AddBlog";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Protected from "./Protected";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {isLoggedIn ? (
          <button
            type="submit"
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            Log Out
          </button>
        ) : (
          <button type="submit"
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}>Log In</button>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-blog" element={<Protected isLoggedIn={isLoggedIn}>
            <AddBlog />
          </Protected>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;

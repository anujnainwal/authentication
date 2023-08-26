import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../../auth/register/Register";
import Login from "../../auth/login/Login";
import ForgetPassword from "../../auth/forgetPassword/ForgetPassword";
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
};

export default MainRouter;

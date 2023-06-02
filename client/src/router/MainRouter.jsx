import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import ForgetPassword from "../auth/forget/ForgetPassword";
import ResetPassword from "../auth/reset/ResetPassword";
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h2>home</h2>} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<h2>logout</h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default MainRouter;

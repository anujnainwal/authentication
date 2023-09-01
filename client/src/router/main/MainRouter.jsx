import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../../auth/register/Register";
import Login from "../../auth/login/Login";
import ForgetPassword from "../../auth/forgetPassword/ForgetPassword";
import NotFoundError from "../../pages/notFound/NotFoundError";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products"
const MainRouter = () => {
  return (
    <>   
      <Routes>
   
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgetPassword />} />
        <Route path="/*" element={<NotFoundError />} />
      </Routes>
    </>
  );
};

export default MainRouter;

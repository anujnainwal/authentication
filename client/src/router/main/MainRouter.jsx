import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

const Login = lazy(() => import("../../auth/login/Login"));
const ForgetPassword = lazy(() =>
  import("../../auth/forgetPassword/ForgetPassword")
);
const Register = lazy(() => import("../../auth/register/Register"));
import NotFoundError from "../../pages/notFound/NotFoundError";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import Categories from "../../pages/categories/Categories";
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home/dashboard" />} />
        <Route path="/home/dashboard" element={<Home />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/home/categories" element={<Categories />} />
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route path="/forgotPassword" element={<ForgetPassword />} />
        <Route path="/*" element={<NotFoundError />} />
      </Routes>
    </>
  );
};

export default MainRouter;

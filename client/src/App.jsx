import React from "react";
import "./App.css";
import MainRouter from "./router/main/MainRouter";

import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <>
      {/* <Sidebars /> */}
      <Navbar />
      <MainRouter />
    </>
  );
}

export default App;

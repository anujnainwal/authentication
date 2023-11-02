import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList/ProductList";

const ProductHome = () => {
  const [data, setData] = useState([
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
    { column1: "Data 1", column2: "Data 2", column3: "Data 3" },
  ]);
  return (
    <>
      <Routes>
        <Route path="/productList" element={<ProductList data={data} />} />
      </Routes>
    </>
  );
};

export default ProductHome;

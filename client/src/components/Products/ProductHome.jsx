import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import CreateProduct from "./ProductAdd/CreateProduct";

const ProductHome = () => {
  const [data, setData] = useState([
    {
      id: 0,
      productName: "Iphone",
      price: 2000,
      qty: 10,
      category: "Mobile",
      brand: "Apple",
      productImage:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=90",
      createdBy: "Anuj Singh Nainwal",
      accessLevel: "Admin",
    },
  ]);
  return (
    <>
      <Routes>
        <Route path="/productList" element={<ProductList data={data} />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
    </>
  );
};

export default ProductHome;

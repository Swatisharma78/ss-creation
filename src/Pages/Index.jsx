import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage";
import Navbar from "../components/Navbar";
import ProductPage from "./OurProducts/ProductPage";
import { useDispatch } from "react-redux";
import { get_products } from "../features/Product/productSlice";

import FinalPayment from "./FinalPayment";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_products());
   
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/products/mens" element={<ProductPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkOut" element={<Checkout />} />
        <Route exact path="/checkOut/payment" element={<FinalPayment />} />

     
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

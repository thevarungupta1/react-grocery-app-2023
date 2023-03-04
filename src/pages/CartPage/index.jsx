import React from "react";
import Navbar from "../../components/Navbar";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CartItems />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;

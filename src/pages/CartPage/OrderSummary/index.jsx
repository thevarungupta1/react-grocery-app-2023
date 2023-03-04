import React, { useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const { Carts } = useSelector((state) => state);

  return (
    <div
      style={{ backgroundColor: "#fff", padding: "20px", marginTop: "20px" }}
    >
      <h4>Order Summary</h4>
      <table className="table">
        <tr>
          <td>Subtotal:</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Discount:</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Coupon Code:</td>
          <td>0</td>
        </tr>
        <tr>
          <td>To Pay</td>
          <td>0</td>
        </tr>
      </table>
      <button className="btn btn-primary btn-block">Checkout</button>
    </div>
  );
};
export default OrderSummary;

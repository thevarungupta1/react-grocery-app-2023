import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../../redux/actions/cart-actions";

const OrderSummary = () => {
  const { cartTotalQuantity, cartTotalAmount } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartTotalAmount]);

  return (
    <div
      style={{ backgroundColor: "#fff", padding: "20px", marginTop: "20px" }}
    >
      <div className="row">
        <div className="col-md-6">
          <h4>SubTotal: </h4>
        </div>
        <div className="col-md-6 text-right">
          <h4>
            {" "}
            <span>&#8377;</span> {cartTotalAmount}
          </h4>
        </div>
      </div>      
      <p style={{ color: "#999", textAlign: "center", marginTop: '10px'}}>
        Checkout to make the payment
      </p>
      <button className="btn btn-primary btn-block">Checkout</button>
    </div>
  );
};
export default OrderSummary;

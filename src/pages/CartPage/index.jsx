import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Constants from "../../api/Constants";
import Navbar from "../../components/Navbar";

const CartPage = () => {
  const { Carts, numberCart } = useSelector((state) => state);
  console.log(Carts);

  return (
    <>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Your Cart ({numberCart} items)</h2>
            <table className="table">
              <tr>
                <th colSpan="2">Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {Carts.map((item) => (
                <tr>
                  <td>
                    <img
                      src={Constants.IMAGE_URL + item.image}
                      alt=""
                      className="img-thumbnail"
                      style={{ width: "120px" }}
                    />
                  </td>
                  <td>
                    <h3>{item.productName}</h3>
                    <p>{item.unit}</p>
                  </td>
                  <td>
                    <h2>
                      <span>&#8377;</span>
                      {item.price}
                      <span
                        style={{
                          fontSize: "22px",
                          marginLeft: "10px",
                          color: "#888",
                        }}
                      >
                        <del>
                          <span>&#8377;</span>
                          {item.mrp}
                        </del>
                      </span>
                    </h2>
                  </td>
                  <td>
                    <h2>{item.quanity}</h2>
                  </td>
                  <td>
                    <h2>
                      <span>&#8377;</span>
                      {item.price * item.quanity}
                    </h2>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <h4>Order Summary</h4>
            <table className="table">
              <tr>
                <td>Subtotal:</td>
                <td></td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td></td>
              </tr>
              <tr>
                <td>Coupon Code:</td>
                <td></td>
              </tr>
              <tr>
                <td>To Pay</td>
                <td></td>
              </tr>
            </table>
            <button className="btn btn-primary btn-block">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;

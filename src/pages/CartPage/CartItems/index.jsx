import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Constants from "../../../api/Constants";
import { ActionTypes } from "../../../redux/constants/action-types";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
} from "../../../redux/actions/cart-actions";

const CartItems = () => {
  const dispatch = useDispatch();

  const { Carts, numberCart, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state
  );

  const onIncreaseHandler = (item) => {
    dispatch(addToCart(item));
  };

  const onDecreaseHandler = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const onRemoveHandler = (item) => {
    dispatch(deleteFromCart(item));
  };
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px" }}>
      <h2 className="text-center">Your Cart ({numberCart} items)</h2>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Carts.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={Constants.IMAGE_URL + item.image}
                  alt=""
                  className="img-thumbnail"
                  style={{ width: "120px" }}
                />
                <br />
                <a onClick={() => onRemoveHandler(item)}>remove</a>
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
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => onIncreaseHandler(item)}
                  >
                    +
                  </button>
                  <button type="button" class="btn btn-secondary">
                    {item.quanity}
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => onDecreaseHandler(item)}
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <h2>
                  <span>&#8377;</span>
                  {item.price * item.quanity}
                </h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;

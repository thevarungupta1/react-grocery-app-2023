import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: product,
  };
};

export const decreaseQuantity = (product) => {
  return{
    type: ActionTypes.DECREASE_QUANTITY,
    payload: product
  }
}

export const deleteFromCart = (product) => {
  return {
    type: ActionTypes.DELETE_CART,
    payload: product
  }
}

export const getCartTotal = () => {
  return{
    type: ActionTypes.GET_TOTAL_CART
  }
}


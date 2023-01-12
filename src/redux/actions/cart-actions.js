import { ActionTypes } from "../constants/action-types";

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: product,
  };
};


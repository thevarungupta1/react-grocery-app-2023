import { ActionTypes } from "../constants/action-types";

const initialState = {
  numberCart: 0,
  Carts: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_NUMBER_CART:
      return {
        ...state,
      };
    case ActionTypes.ADD_CART:
      if (state.numberCart === 0) {
        let item = {
          ...payload,
          quanity: 1,
        };
        state.Carts.push(item);
      } else {
        let check = false;
        state.Carts.map((item, index) => {
          if (item._id === payload._id) {
            state.Carts[index].quanity++;
            check = true;
          }
        });
        if (!check) {
          let _item = {
            ...payload,
            quanity: 1,
          };
          state.Carts.push(_item);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    case ActionTypes.DECREASE_QUANTITY:
      const itemIndex = state.Carts.findIndex(
        (cartItem) => cartItem._id === payload._id
      );
      if (state.Carts[itemIndex].quanity > 1) {
        state.Carts[itemIndex].quanity -= 1;
      } else if (state.cartItem[itemIndex].quanity === 1) {
        const nextCartItems = state.Carts.filter(
          (cartItem) => cartItem._id !== payload._id
        );
        state.Carts = nextCartItems;
      }
      return {
        ...state,
        numberCart: state.numberCart - 1,
      }

    case ActionTypes.GET_TOTAL_CART:
      let { total, quanity } = state.Carts.reduce(
        (cartTotal, cartItem) => {
          const { price, quanity } = cartItem;
          const itemTotal = price * quanity

          cartTotal.total += itemTotal;
          cartTotal.quanity += quanity;
          return cartTotal
        }, {
        total: 0,
        quanity: 0
      }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        cartTotalAmount: total,
        cartTotalQuantity: quanity
      }


    case ActionTypes.EMPTY_CART:
      return {
        numberCart: 0,
        Carts: []
      }
    default:
      return state;
  }
};

import { ActionTypes } from "../constants/action-types";

const initialState = {
  numberCart: 0,
  Carts: [],
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
    case ActionTypes.INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[payload].quanity++;
      return {
        ...state,
      };

    case ActionTypes.DECREASE_QUANTITY:
      let quanity = state.Carts[payload].quanity;
      if (quanity > 1) {
        state.numberCart--;
        state.Carts[payload].quanity--;
      }
      return {
        ...state,
      };

    case ActionTypes.DELETE_CART:
      //let quantity = state.Carts[payload].quanity;
      return {
        ...state,
        numberCart: state.numberCart - quanity,
        Carts: state.Carts.filter((item) => {
          return item._id !== state.Carts[payload]._id;
        }),
      };
    default:
      return state;
  }
};

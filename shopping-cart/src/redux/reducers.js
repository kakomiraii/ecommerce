// src/redux/reducers.js
import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_DETAILS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "./actions";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case FETCH_PRODUCT_DETAILS:
      const product = action.payload;
      if (state.find((p) => p.id === product.id)) {
        return state.map((p) => (p.id === product.id ? product : p));
      }
      return [...state, product];
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItem) {
        return state.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.product.id !== action.payload);
    case UPDATE_QUANTITY:
      return state.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, quantity: parseInt(action.payload.quantity) }
          : item
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;

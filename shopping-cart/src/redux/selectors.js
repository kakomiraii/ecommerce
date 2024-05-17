// src/redux/selectors.js
export const selectCartItems = (state) => state.cart;

export const selectCartItemCount = (state) =>
  state.cart.reduce((count, item) => count + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

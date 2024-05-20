export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  payload: { product, quantity: parseInt(quantity) },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity: parseInt(quantity) },
});

export const updateCartItemQuantity = (productId, quantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { productId, quantity },
});

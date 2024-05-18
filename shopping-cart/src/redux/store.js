import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/ProductsApi";
import { cartReducer } from "./reducers";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;

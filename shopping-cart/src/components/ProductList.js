// src/components/ProductList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="mb-2" />
            <p className="font-semibold">{product.title}</p>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

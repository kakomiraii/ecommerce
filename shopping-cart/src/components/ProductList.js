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
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-8 md:gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg overflow-hidden shadow-md bg-white"
          >
            <Link to={`/product/${product.id}`} className="group block">
              <div className="h-64 overflow-hidden">
                {" "}
                {/* Adjust the height of the image container */}
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">
                  {product.title}
                </p>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

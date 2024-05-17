// src/components/ProductDetails.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails, addToCart } from "../redux/actions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === parseInt(id))
  );

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, product, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product, quantity));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md border p-8">
        <img src={product.image} alt={product.title} className="mb-4" />
        <p className="font-semibold">{product.title}</p>
        <p className="text-gray-600">${product.price}</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="border p-2 mt-2"
        />
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

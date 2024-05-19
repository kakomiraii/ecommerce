import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../features/ProductsApi";

const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-10 bg-slate-500 rounded-md">
      <div className="grid grid-cols-3 gap-8 md:gap-12">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-md bg-white"
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="h-64 overflow-hidden">
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
          ))
        ) : (
          <div>No products available.</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

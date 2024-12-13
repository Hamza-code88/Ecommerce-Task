"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MyShop = () => {
  const [myProducts, setMyProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setMyProducts(storedProducts);
  }, []);

  const handleDeleteProduct = (id) => {
    const updatedProducts = myProducts.filter((product) => product.id !== id);
    setMyProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleEditProduct = (id) => {
    router.push(`/edit?id=${id}`);
  };

  return (
    <div className="px-4 w-full h-screen sm:px-6 lg:px-8">
      <h1 className="text-2xl mt-24 sm:text-4xl text-center font-bold mt-10 text-pink-600">
        My Shop Products
      </h1>
      <div className="w-full border-b-2 border-pink-500 p-2 mt-5">
        <Link href="/Uplod" className="text-xl font-bold px-5 py-1 text-pink-500 ">Uplod More</Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {myProducts.map((product) => (
          <div key={product.id} className="flex flex-col bg-pink-100 p-4 rounded-lg shadow-md hover:bg-pink-200 transition duration-300">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4 rounded-md" />
            <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
            <p className="text-gray-600 mb-2">$ {product.price}</p>
            <Link href={`/ProductsDetails/${product.id}`}>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-md mt-2 mb-5 hover:bg-pink-700 transition duration-200 w-full">
                View Details
              </button>
            </Link>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
              <button
                onClick={() => handleEditProduct(product.id)}
                className="border border-pink-500 text-pink-600  py-1 sm:px-4 sm:py-2 rounded-md mt-2 sm:mt-0 sm:ml-4 hover:bg-pink-600 hover:text-white transition duration-200 w-full sm:w-auto"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="border border-pink-500  px-2 py-1 sm:px-4 sm:py-2 rounded-md mt-2 sm:mt-0 sm:ml-4 hover:bg-pink-600 hover:text-white transition duration-200 w-full sm:w-auto"> 🗑️ </button>
            </div>

          </div>
        ))}
        {myProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-600 mt-6">
            No products uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyShop;

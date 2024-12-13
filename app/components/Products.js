"use client";

import React, { useState, useEffect } from "react";
import productData from './api.json';
import { useWishlist } from "../context/WishlistContext";
import Categories from "./Categories";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Link from "next/link";

const Products = () => {
  const { addToWishlist } = useWishlist();

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    
    const uploadedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts([...productData, ...uploadedProducts]);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category?.toLowerCase().trim() === selectedCategory.toLowerCase().trim()
      : true;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="products" className="px-4 sm:px-6 lg:px-8">
      <Categories onCategorySelect={setSelectedCategory} />
      <Searchbar onSearch={(query) => setSearchQuery(query)} />
      <Filter onSortChange={() => {}} />

      <h1 className="text-2xl sm:text-4xl text-center font-bold mt-10 text-pink-600">
        {selectedCategory ? `${selectedCategory} Products` : "All Products"}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col bg-pink-100 p-4 rounded-lg shadow-md hover:bg-pink-200 transition duration-300">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-4 rounded-md" />
            <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
            <p className="text-gray-600 mb-2">$ {product.price}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
              <Link href={`/ProductsDetails/${product.id}`}>
                <button className="bg-pink-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-pink-700 transition duration-200 w-full">
                  View Details
                </button>
              </Link>
              <button onClick={() => addToWishlist(product)} className="border border-pink-500 text-pink-600 px-2 py-1 sm:px-4 sm:py-2 rounded-md mt-2 sm:mt-0 sm:ml-4 hover:bg-pink-600 hover:text-white transition duration-200 w-full sm:w-auto">
                ❤️
              </button>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-600 mt-6">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;

"use client";

import React, { useState } from "react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart()
 

  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white shadow p-4 rounded-md"
            >
              <div className="w-3/12">
                <img src={item.image} className="w-4/12"></img>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">PKR:{item.price}</p>
              </div>
              <div className=" items-center m-5 flex justify-between w-2/12">
             
              <button onClick={() => addToCart(item)} className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">Send To Cart</button>
              <button  onClick={() => removeFromWishlist(item.id)}  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">
                Remove
              </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;

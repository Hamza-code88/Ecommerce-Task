"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext"; 

const Cart = ({ closeCart }) => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

 
    
      
   
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-6/12 h-[600px] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className=" bg-pink-50 flex justify-between items-center p-4 rounded-md">
                <div>
                  <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
                  <p>{product.title}</p>
                  <p>PKR {product.price}</p>
                </div>
               
                <button onClick={() => removeFromCart(product.id)} className="text-pink-700 hover:text-red-700"> Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="font-semibold">Total Price:</p>
          <p className="font-semibold">{getTotalPrice()}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={closeCart} className="bg-pink-600 text-white py-2 px-4 rounded-lg">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

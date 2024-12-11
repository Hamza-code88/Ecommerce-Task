"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


 
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  const openCart = () => setIsCartOpen(true);

  
  const closeCart = () => setIsCartOpen(false);

  
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

 
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };


 
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
    
    
  };

  

  return (
    <CartContext.Provider
      value={{cart,addToCart,removeFromCart, getTotalPrice,isCartOpen,  openCart,  closeCart}}>
      {children}
    </CartContext.Provider>
  );
};

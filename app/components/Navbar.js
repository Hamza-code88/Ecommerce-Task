"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; 
import { useWishlist } from "../context/WishlistContext"; 
import Link from "next/link";
import Cart from "./Cart";

const Navbar = () => {
  const { cart, openCart, closeCart, isCartOpen } = useCart(); 
  const { wishlist } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`flex justify-between items-center p-4 fixed w-full top-0 left-0 z-50 transition-all ${isScrolled ? 'bg-pink-100' : 'bg-pink-50'}`}>
        <div className="text-lg font-bold text-pink-600">MyEcommerce</div>
        <ul className="hidden sm:flex justify-center items-center space-x-8">
          <li className="text-gray-700 hover:text-pink-600 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-700 hover:text-pink-600 cursor-pointer">About</li>
          <li className="text-gray-700 hover:text-pink-600 cursor-pointer"><Link href="#products">Shop</Link></li>
         
          
          <li className="text-gray-700 hover:text-pink-600 cursor-pointer">
            <Link href='/registration'>Sign-up</Link></li>
          
          <button
            onClick={openCart} 
            className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
          >
            Cart ({cart.length})
          </button>

          <Link href="/wishlist" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700" >Wishlist ({wishlist.length})</Link>
        </ul>

        
        <div className="sm:hidden flex items-center space-x-4">
          <button  onClick={openCart}  className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-sm" > Cart ({cart.length}) </button>

          <Link  href="/wishlist" className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-sm" >
            Wishlist ({wishlist.length})  </Link>

          <button className="text-gray-700 hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          </button>
        </div>
      </nav>

 {isCartOpen && <Cart closeCart={closeCart} />} 
    </header>
  );
};

export default Navbar;

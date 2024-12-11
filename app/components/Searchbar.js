"use client";

import React, { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    onSearch(input); 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); 
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-4 py-2">
      <div className="w-8/12 flex items-center space-x-2">
        <input
          type="text" placeholder="Search products..." className="w-9/12 px-4 py-2 border border-pink-100 rounded-md focus:outline-none focus:ring focus:ring-pink-400"  value={input} onChange={handleInputChange} onKeyDown={handleKeyPress} />
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700" onClick={handleSearch}  >Search</button>
      </div>
    </div>
  );
};

export default Searchbar;

"use client";

import React from "react";

const Categories = ({ onCategorySelect }) => {
  const categories = [
    { name: "Electronics", icon: "💻" },
    { name: "Men's Fashion", icon: "👔" },
    { name: "Women's Fashion", icon: "👚" },
    { name: "jewelery", icon: "💍" },
  ];

  return (
    <section className="py-8">
      <div className="w-full mx-auto px-4">
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
          Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index}  onClick={() => onCategorySelect(category.name)} className="flex flex-col items-center bg-pink-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-semibold text-pink-700">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

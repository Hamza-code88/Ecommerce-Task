import React, { useEffect, useState } from "react";
import Link from "next/link";


const RecentView = () => {
  const [recentProducts, setRecentProducts] = useState([]);
 
  useEffect(() => {
    const storedViews = JSON.parse(localStorage.getItem("recentViews")) || [];
    setRecentProducts(storedViews);
  }, []);

  return (
    <div className="recent-view-container my-10">
      <h2 className="text-center text-2xl font-bold mb-5">Recently Viewed Products</h2>
      <div className=" grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2">
        {recentProducts.map((product) => (
          <div key={product.id} className=" product-card bg-white p-4 shadow-md rounded-lg">
            <img  src={product.image }   alt={product.title}   className="w-full h-40 object-cover rounded-md" />
            <Link href={`/ProductsDetails/${product.id}`}>
              <button className="bg-pink-600 text-white px-4 py-1 rounded-md mt-4 hover:bg-pink-700 transition duration-200 w-full" >View Details</button>
            </Link>
            <p className="text-gray-600 p-5">$ {product.price}</p>
          </div>
        ))}
        {recentProducts.length === 0 && (
          <p className="col-span-full text-gray-600 text-center">
            No products viewed recently.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentView;

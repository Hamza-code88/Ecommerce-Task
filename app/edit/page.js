"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const EditPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const productId = searchParams.get("id");

  useEffect(() => {
    if (!productId) {
      setError("Invalid product ID");
      return;
    }

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const productToEdit = storedProducts.find(
      (item) => String(item.id) === String(productId)  
    );

    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      setError("Product not found");
    }
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result, 
        }));
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSave = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = storedProducts.map((item) =>
      item.id === product.id ? product : item
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    router.push("/shop");
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg font-bold">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input type="text"  name="title"  value={product.title}  onChange={handleInputChange}  className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"  name="price"  value={product.price}  onChange={handleInputChange}  className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image URL:</label>
          <input  type="text"  name="image"  value={product.image}  onChange={handleInputChange}  className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Upload Image:</label>
          <input type="file" onChange={handleFileChange} className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {product.image && (
          <div className="mb-4">
            <p className="text-gray-700">Image Preview:</p>
            <img src={product.image} alt="Product Preview" className="w-full h-auto rounded-md"
            />
          </div>
        )}

        <button type="button" onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPage;

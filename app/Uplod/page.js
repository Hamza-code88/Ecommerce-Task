'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ProductUpload = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter()

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ title, price, description, image });

    const storedProducts = JSON.parse(localStorage.getItem("products")) || []
    const newProduct = {
        id: storedProducts.length + 32,
        title,
        price,
        description,
        image: URL.createObjectURL(image),


    }

    

    const updateProduct = [ newProduct,...storedProducts]

    localStorage.setItem("products", JSON.stringify(updateProduct))
    alert("Product Uploded");
    setTitle("")
    setDescription("")
    setPrice("")
    setImage(null);
    
    router.push("/shop")
  };

  return (
    <div className="flex justify-center items-center h-screen mt-20 bg-gray-100">
      <form 
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload Product</h2>

        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)}  placeholder="Product title" className="w-full border border-pink-100 rounded-lg px-3 py-2 focus:ring-2 focus:outline-none mb-4" required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product price" className="w-full border border-pink-100 rounded-lg px-3 py-2 focus:ring-2  focus:outline-none mb-4" required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Product description"  className="w-full border border-pink-100 rounded-lg px-3 py-2 focus:ring-2 focus:outline-none mb-4"  rows="4"  required
        ></textarea>

        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border border-pink-100 rounded-lg px-3 py-2 focus:ring-2  focus:outline-none mb-4" required/>

        <button type="submit" className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;

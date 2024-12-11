"use client";

import React from "react";

const Hero = () => {
    return (
        <section className="relative">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 py-16">
               
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Welcome to <span className="text-pink-600">MyEcommerce</span>
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl">
                        Discover amazing products at unbeatable prices. Shop now and enjoy exclusive deals!
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start">
                        <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-200">
                            Shop Now
                        </button>
                        <button className="ml-4 px-6 py-2 border border-pink-600 text-pink-600 rounded-md hover:bg-pink-600 hover:text-white transition duration-200">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="/hero.png"
                        alt="Shopping"
                        className="w-full md:w-3/4 rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

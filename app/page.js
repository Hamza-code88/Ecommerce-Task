"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Recent from './components/Recent'

const Home = () => {
 

  return (
    <>
      <Header />
      <Recent/>
        <Products  />
      
    </>
  );
};

export default Home;

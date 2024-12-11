"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loginusers, setLoginusers] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) =>
        u.email === loginusers.email && u.password === loginusers.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");
      router.push("/"); 
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <main className="w-full h-screen">
    <div className="max-w-md mx-auto mt-32 bg-pink-50 p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email"  value={loginusers.email} onChange={(e) => setLoginusers({ ...loginusers, email: e.target.value })} required className="w-full border border-gray-300 rounded-md px-4 py-2"/>

        <input type="password" placeholder="Password"  value={loginusers.password} onChange={(e) => setLoginusers({ ...loginusers, password: e.target.value })} required   className="w-full border border-gray-300 rounded-md px-4 py-2"/>

        <button type="submit"  className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700"  > Login </button>
      </form>
      <p className="mt-4 text-center">Don't have an account? <span className="text-pink-600 cursor-pointer"  onClick={() => router.push("/registration")}>Signup</span>
      </p>
    </div>
    </main>
  );
};

export default Login;

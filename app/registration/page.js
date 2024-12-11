"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find((u) => u.email === user.email);

        if (userExists)  {
            alert("User already exists. Please log in.");
            router.push("/login");
        } else {
            const updatedUsers = [...users, user];
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            localStorage.setItem("isLoggedIn", JSON.stringify(true)); 
            alert("Signup successful! ");
            router.push("/"); 
        }

        
    };

    return (
        <>

        <main className="w-full h-screen">
        <div className="max-w-md  mx-auto mt-32 bg-pink-50 p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
            <form onSubmit={handleSignup} className="space-y-4">

                <input type="text"  placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })}  required className="w-full border border-gray-300 rounded-md px-4 py-2"/>

                <input type="email" placeholder="Email"  value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required className="w-full border border-gray-300 rounded-md px-4 py-2"/>

                <input type="password"placeholder="Password"value={user.password}onChange={(e) => setUser({ ...user, password: e.target.value })}required className="w-full border border-gray-300 rounded-md px-4 py-2" />

                <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700">Signup</button>
            </form>
            <p className="mt-4 text-center">Already have an account?{" "} <span className="text-pink-600 cursor-pointer" onClick={() => router.push("/login")}>Login  </span>
</p>
        </div>
        </main>

        </>
    );
};

export default Signup;

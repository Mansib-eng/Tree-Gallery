"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import "./page.css";

const SignIn = () => {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailOrPhone || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Handle sign-in logic here
  };

  return (
    <div className="signin-container flex flex-col items-center justify-center h-screen bg-gray-200">
      <Head>
        <title>Sign In</title>
        <link rel="stylesheet" href="./page.css" />
      </Head>
      <Navbar />
      <div className="form-container p-8 bg-blue-100 rounded shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-yellow-700 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-pulse">SIGN IN</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="mb-4 p-2 rounded border border-gray-300 w-full"
          />
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded border border-gray-300 w-full"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
            SIGN IN
          </button>
        </form>
        <p className="text-gray-700">
          Not Signed Up yet?{" "}
          <Link href="/signup" className="text-purple-600 hover:text-teal-800">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
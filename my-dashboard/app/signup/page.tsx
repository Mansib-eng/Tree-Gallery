"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import "./page.css";

const SignUp = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !emailOrPhone || !password) {
      setError('Please fill in all fields.');
      return;
    }
    // Handle sign-up logic here
  };

  return (
    <div className="signup-container flex flex-col items-center justify-center h-screen bg-gray-200">
      <Head>
        <title>Sign Up</title>
        <link rel="stylesheet" href="./page.css" />
      </Head>
      <Navbar />
      <div className="form-container p-8 bg-blue-100 rounded shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-yellow-700 shadow-2xl hover:shadow-3xl transition-shadow duration-500 animate-pulse">SIGN UP</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
         <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-6 rounded border border-gray-300 w-full"
            />
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300 pb-2">
          SIGN UP
        </button>
        <p className="text-gray-700 text-lg mt-4">
          Already Signed Up?{" "}
          <Link href="/signin" className="text-purple-600 hover:text-teal-800">
            Sign In here
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

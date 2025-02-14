"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

const Page = () => {
  const colors = ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500', 'text-purple-500'];
  const [textColor, setTextColor] = useState(colors[0]);
  const [navbarColor, setNavbarColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTextColor(randomColor);
      setNavbarColor(randomColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-200 text-white">
      <Navbar />
      <header className={`bg-gray-800 p-2 flex justify-between items-center ${navbarColor}`}>
        <div className="flex items-center bg-gray-800 p-2 rounded">
          <Image src="/assets/tr.png" alt="Logo" width={50} height={50} />
          <h1 className={`text-5xl font-bold ${textColor} ml-2`}>Tree Gallery</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/signin" className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-300">SIGN IN</Link>
          <Link href="/signup" className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300">SIGN UP</Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <h2 className="text-6xl font-semibold mb-6 bg-gradient-to-r from-pink-800 to-pink-300 bg-clip-text text-transparent font-['Roboto'] shadow-lg animate-bounce">
          Welcome to the Admin Dashboard
        </h2>
        <button className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded transition duration-300">
          ADD IMAGES
        </button>
      </main>
    </div>
  );
};

export default Page;

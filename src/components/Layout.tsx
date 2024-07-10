// src/components/Layout.tsx
import Link from 'next/link';
import React from 'react';
// import styles from '@styles/globals.css';
import '../styles/globals.css'
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">My Website</h1>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:underline" href="/">
                    Home
              </Link>
            </li>
            <li>
            <Link className="hover:underline" href="/about">
                    about
              </Link>
            </li>
            <li>
            <Link className="hover:underline" href="/contact">
                    contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        &copy; 2024 My Website
      </footer>
    </div>
  );
};

export default Layout;

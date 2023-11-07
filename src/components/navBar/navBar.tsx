'use client'
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

import logo from '../../assets/logo.png';

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-xl">
                <Image
                    src={logo}
                    alt="Logo"
                    width={60}
                    height={50}
                 />
            </div>
          </div>
          <div className="hidden md:block text-slate-50">
            <div className="ml-10 flex items-baseline space-x-4">
              <ul className="flex font-bold">
                <li className="hover:bg-slate-700 hover:text-slate-50 rounded-lg p-4 text-slate-400">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:bg-slate-700 hover:text-slate-50 rounded-lg p-4">
                  <a href="#about">About</a>
                </li>
                <li className="hover:bg-slate-700 hover:text-slate-50 rounded-lg p-4">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:bg-slate-700 hover:text-slate-50 rounded-lg p-4">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <FiMenu size={24} color="white" />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden w-full absolute">
          <ul className="bg-zinc-900 text-slate-50 p-6 space-y-4 text-center font-bold">
            <li onClick={closeMobileMenu}>
              <a href="#home">Home</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#about">About</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

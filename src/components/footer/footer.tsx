import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="flex flex-col max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400 mb-4 mt-8">
          &copy; {new Date().getFullYear()} Guilherme Aiex. Todos os direitos reservados.
        </p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a
              href="#home"
              className="text-sm hover:text-gray-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm hover:text-gray-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm hover:text-gray-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="flex space-x-4 text-2xl">
            <a href="https://wa.me/5524992712340" target="_blank" className="text-gray-400 hover:text-white">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/guilherme-medeiros-aiex-0635b421b/" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Aiex02" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

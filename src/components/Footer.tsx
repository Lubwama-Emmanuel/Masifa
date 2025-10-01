"use client";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo.svg"
                  alt="Masifa Group Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold font-heading">
                Masifa Group Ltd
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-sans">
              Creating safe, nurturing environments where young people can
              flourish, grow, and build the foundation for their brightest
              future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/homes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">
              Contact Info
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Canvey Island, Essex</p>
              <p>OFSTED Registered</p>
              <p>24/7 Support Available</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Masifa Group Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};






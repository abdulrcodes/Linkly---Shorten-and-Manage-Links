import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white py-10 text-center relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-indigo-700 opacity-20 blur-lg"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Company Info */}
        <p className="text-xl font-semibold mb-2">&copy; 2024 Linkly</p>
        <p className="text-gray-300 text-sm mb-6">All rights reserved.</p>

        {/* Links */}
        <div className="flex justify-center space-x-6 text-gray-200 text-sm md:text-base font-medium">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {/* Facebook Icon (SVG) */}
            <svg
              width="24"
              height="24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.86 7.94 9.8v-6.92h-2.4v-2.88h2.4V9.96c0-2.37 1.43-3.68 3.6-3.68 1.04 0 2.12.18 2.12.18v2.34h-1.2c-1.18 0-1.54.74-1.54 1.5v1.8h2.64l-.42 2.88h-2.22V21.8C18.56 20.86 22 16.84 22 12z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            {/* Twitter Icon (SVG) */}
            <svg
              width="24"
              height="24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.56c-.88.39-1.82.65-2.81.77a4.92 4.92 0 002.17-2.71 9.79 9.79 0 01-3.1 1.18 4.87 4.87 0 00-8.28 4.45A13.85 13.85 0 011.67 3.15a4.87 4.87 0 001.5 6.5 4.92 4.92 0 01-2.2-.61v.06c0 2.29 1.62 4.2 3.78 4.63a4.89 4.89 0 01-2.19.08 4.88 4.88 0 004.56 3.39A9.79 9.79 0 010 19.54a13.78 13.78 0 007.44 2.18c8.92 0 13.8-7.4 13.8-13.8 0-.21 0-.42-.01-.63a9.88 9.88 0 002.42-2.52z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors duration-300"
          >
            {/* Instagram Icon (SVG) */}
            <svg
              width="24"
              height="24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.2c3.22 0 3.6 0 4.86.07 1.17.05 1.97.23 2.45.39a5.16 5.16 0 011.85 1.16 5.16 5.16 0 011.16 1.85c.16.47.34 1.28.39 2.45.08 1.25.08 1.64.08 4.86s0 3.6-.07 4.86c-.05 1.17-.23 1.97-.39 2.45a5.17 5.17 0 01-1.16 1.85 5.17 5.17 0 01-1.85 1.16c-.47.16-1.28.34-2.45.39-1.25.08-1.64.08-4.86.08s-3.6 0-4.86-.07c-1.17-.05-1.97-.23-2.45-.39a5.17 5.17 0 01-1.85-1.16 5.17 5.17 0 01-1.16-1.85c-.16-.47-.34-1.28-.39-2.45C2.2 15.6 2.2 15.22 2.2 12s0-3.6.07-4.86c.05-1.17.23-1.97.39-2.45a5.16 5.16 0 011.16-1.85 5.16 5.16 0 011.85-1.16c.47-.16 1.28-.34 2.45-.39C8.4 2.2 8.78 2.2 12 2.2m0-2.2C8.7 0 8.26 0 7.01.07c-1.33.06-2.24.27-3.03.57a7.31 7.31 0 00-2.63 1.73A7.31 7.31 0 00.57 4.64c-.3.79-.51 1.7-.57 3.03C0 8.26 0 8.7 0 12s0 3.74.07 4.99c.06 1.33.27 2.24.57 3.03.35.9.9 1.7 1.73 2.63a7.31 7.31 0 002.63 1.73c.79.3 1.7.51 3.03.57C8.26 24 8.7 24 12 24s3.74 0 4.99-.07c1.33-.06 2.24-.27 3.03-.57a7.31 7.31 0 002.63-1.73 7.31 7.31 0 001.73-2.63c.3-.79.51-1.7.57-3.03.07-1.25.07-1.69.07-4.99s0-3.74-.07-4.99c-.06-1.33-.27-2.24-.57-3.03a7.31 7.31 0 00-1.73-2.63A7.31 7.31 0 0019.02.57C18.23.27 17.32.06 16 .01 14.74 0 14.3 0 12 0z" />
              <path d="M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zM18.4 4.6a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

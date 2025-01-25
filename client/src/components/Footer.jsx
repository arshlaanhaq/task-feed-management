import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8  bottom-0 w-full">
      <div className="container mx-auto px-4">
 

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm">&copy; {new Date().getFullYear()} Application. All rights reserved.</div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
           
            <a
              href="https://x.com/ArshlaanHaq"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.636 4.106 4.106 0 0 0 1.804-2.263 8.273 8.273 0 0 1-2.605.982 4.102 4.102 0 0 0-6.993 3.735A11.64 11.64 0 0 1 3.17 4.897a4.101 4.101 0 0 0 1.27 5.467 4.073 4.073 0 0 1-1.86-.512v.051a4.1 4.1 0 0 0 3.292 4.022 4.07 4.07 0 0 1-1.852.07 4.105 4.105 0 0 0 3.833 2.843A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.817" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/_haq_ji/"
              className="hover:text-gray-400"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.5 2C5.014 2 3 4.014 3 6.5v11c0 2.486 2.014 4.5 4.5 4.5h9c2.486 0 4.5-2.014 4.5-4.5v-11C21 4.014 18.986 2 16.5 2h-9zM7.5 4h9C17.879 4 19 5.121 19 6.5v11c0 1.379-1.121 2.5-2.5 2.5h-9C6.121 20 5 18.879 5 17.5v-11C5 5.121 6.121 4 7.5 4zm9.5 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm0 1.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

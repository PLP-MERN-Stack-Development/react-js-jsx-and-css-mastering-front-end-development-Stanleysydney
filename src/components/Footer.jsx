import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
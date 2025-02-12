import React from "react";
import { FaCheckCircle, FaMoon, FaSun } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="text-center mb-8 py-8 bg-gradient-to-r from-green-500 to-teal-500 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <div className="flex justify-center items-center">
        <FaCheckCircle className="text-yellow-300 text-4xl mr-2 animate-pulse" />
        <h1 className="text-4xl font-bold text-white font-poppins">
          <span className="text-yellow-300">DailyBoost</span>{" "}
          <span className="text-pink-300">Tracker</span>
        </h1>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </div>
      <p className="text-gray-200 dark:text-gray-300 mt-3 text-lg font-poppins">
        Build habits, stay consistent, and achieve your goals!
      </p>
    </header>
  );
};

export default Header;
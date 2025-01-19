// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="font-bold text-xl">YourLogo</div>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Rooms</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Mansions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Countryside</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-1"
        />
        <button className="text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

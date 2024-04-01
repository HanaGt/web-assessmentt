"use client"
import React from 'react';

const Header = () => {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="flex items-center justify-between h-4 w-full border-[1px] bg-white p-8">
      <div className="flex items-center">
        <div>
        <img src="/vector.png" alt="HakimHub" className="w-4 h-4  mr-8" />
        HakimHub
        </div>
    

        <div className="flex items-center">
          <div className="mr-4">
            <a href="/" className="text-gray-700 hover:text-blue-700">Home</a>
          </div>
          <div className="mr-4">
            <a href="/hospitals" className="text-gray-700 hover:text-blue-700">Hospitals</a>
          </div>
          <div>
            <a href="/doctors" className="text-gray-700 hover:text-blue-700">Doctors</a>
          </div>
        </div>
      </div>
      
      <div>
        <button className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[16px] cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;

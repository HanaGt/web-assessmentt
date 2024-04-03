import React from "react";

const Header = () => {
  return (
    <div className="w-full border h-14 py-4 gap-4 flex flex-row items-center justify-center bg-slate-100">
      <div className="flex flex-row">
        <img src="Vector.png" className="w-8 h-8" alt="logo" />
        <p className="font-big text-2xl gap-28">
          Hakim<span className="text-rose-500">Hub</span>
        </p>
      </div>
      <div className="flex flex-row gap-10 pl-96 font-semibold">
        <p>Home</p>
        <p>Doctors</p>
        <p>Hospitals</p>
      </div>
      <div className="ml-auto flex">
        <button className="rounded-full w-36 border-2 border-gray-500 h-10">
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Header;

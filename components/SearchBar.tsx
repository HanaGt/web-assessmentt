import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="px-10 py-10 bg-slate-100">
    <div className="border-[2px] flex items-center p-3 rounded-lg">
      <label htmlFor="inputId" className="flex-grow">
        <div className="flex items-center">
          <FaSearch size={20} className="mr-2" />
          <input
            type="text"
            id="inputId"
            placeholder="Enter your keywords"
            className="bg-transparent outline-none border-none flex-grow pl-2 pr-3 text-sm"
          />
        </div>
      </label>
      <button className="border rounded-lg bg-sky-700 text-white font-semibold px-3 py-2 text-sm ml-2">
        Search
      </button>
    </div>
    </div>
  );
};

export default SearchBar;

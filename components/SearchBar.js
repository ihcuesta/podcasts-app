import React from "react";

const SearchBar = ({ results, handleSearch }) => {
  return (
    <div className="flex justify-end h-9 mt-6 w-full">
      <div className="flex items-center w-full md:w-1/2 lg:w-1/3">
        <p className="mr-3 px-2 bg-sky-600 text-white rounded-xl">{results}</p>
        <input
          className="border border-slate-300 rounded-md p-2 w-full"
          type="text"
          id="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;

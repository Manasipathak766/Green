import React from 'react';

const SearchBar = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search with name"
      className="w-full sm:w-2/3 md:w-1/2 px-4 py-2 rounded-full bg-gray-700 border border-gray-600 placeholder-gray-400"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
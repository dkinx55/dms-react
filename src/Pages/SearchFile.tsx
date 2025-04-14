import React from 'react';

const SearchFiles: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Search Files</h1>
      <input type="text" placeholder="Search..." className="border px-2 py-1 rounded w-full" />
    </div>
  );
};

export default SearchFiles;

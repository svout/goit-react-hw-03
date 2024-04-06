import React from 'react';
import "./SearchBox.css"

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='search-box'
    />
  );
};

export default SearchBox;

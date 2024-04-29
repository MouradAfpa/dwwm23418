import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleChange}
        className="w-75 mt-5"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

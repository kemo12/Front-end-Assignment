import React, { useState } from 'react';
import './Search.css';
const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="container">
      <div class="example" action="/action_page.php">
        <input
          type="text"
          value={search}
          placeholder="Search.."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;

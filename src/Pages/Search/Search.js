import React from 'react';
import { SearchBar } from '../../Components';
import SearchResults from '../../Components/SearchResults/SearchResults';
import './Search.css';
const Search = () => {
  return (
    <div className="container">
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Search;

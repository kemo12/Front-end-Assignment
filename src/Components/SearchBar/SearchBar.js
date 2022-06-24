import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/dataContext';
const SearchBar = () => {
  const { search, setSearch, axiosClient, setSearchResults } =
    useContext(DataContext);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults([]);
    axiosClient.get(`search/repositories?q=${search}`).then((response) => {
      setSearchResults(response.data.items);
    });
  };
  return (
    <div className="example">
      <form>
        <input
          type="text"
          value={search}
          placeholder="Search.."
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

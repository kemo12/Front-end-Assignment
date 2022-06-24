import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/dataContext';
const SearchBar = () => {
  const { search, setSearch, axiosClient, setSearchResults } =
    useContext(DataContext);
  const handleSearch = () => {
    axiosClient.get(`search/repositories?q=${search}`).then((response) => {
      setSearchResults(response.data.items);
      console.log(response.data.items);
    });
  };
  return (
    <div className="example" action="/action_page.php">
      <input
        type="text"
        value={search}
        placeholder="Search.."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;

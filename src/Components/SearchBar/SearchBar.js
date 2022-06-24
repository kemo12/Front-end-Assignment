import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import './SearchBar.css';
const SearchBar = () => {
  const { search, setSearch, axiosClient, setSearchResults, setDidSearchDone } =
    useContext(DataContext);
  const handleSearch = (e) => {
    e.preventDefault();
    // eslint-disable-next-line eqeqeq
    if (!search == '') {
      setDidSearchDone(false);
      setSearchResults([]);
      axiosClient.get(`search/repositories?q=${search}`).then((response) => {
        setSearchResults(response.data.items);
        setDidSearchDone(true);
      });
    }
  };
  return (
    <div className="example">
      <form>
        <input
          required
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

import axios from 'axios';
import React, { useState, createContext } from 'react';
export const DataContext = createContext();
const axiosClient = axios.create({ baseURL: `https://api.github.com` });
const DataProvider = ({ children }) => {
  const [comparedRepos, setComparedRepos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [didSearchDone, setDidSearchDone] = useState(true);
  const [search, setSearch] = useState('');

  return (
    <DataContext.Provider
      value={{
        comparedRepos,
        setComparedRepos,
        searchResults,
        setSearchResults,
        search,
        setSearch,
        axiosClient,
        didSearchDone,
        setDidSearchDone,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;

import React, { lazy, useContext } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import { Loadable } from '../Loadable/Loadable';
import './SearchResults.css';
const Results = Loadable(
  lazy(() => import('./../ResultContainer/ResultContainer'))
);

const SearchResults = () => {
  const { searchResults } = useContext(DataContext);
  return searchResults.length === 0 ? (
    <div className="noResult"></div>
  ) : (
    <div className="resultContainer">
      <Results />
    </div>
  );
};

export default SearchResults;

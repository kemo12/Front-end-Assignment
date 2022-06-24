import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import Loading from '../Loadable/loading';
import { ResultContainer } from './../index';
import './SearchResults.css';
const SearchResults = () => {
  const { didSearchDone, searchResults, search } = useContext(DataContext);
  return didSearchDone ? (
    <div className="resultContainer">
      {
        // eslint-disable-next-line eqeqeq
        searchResults.length === 0 || search == '' ? (
          <div className="beforeSearch">search about some thing !</div>
        ) : (
          <ResultContainer />
        )
      }
    </div>
  ) : (
    <Loading />
  );
};

export default SearchResults;

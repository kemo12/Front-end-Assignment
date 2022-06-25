import React, { useContext, useState } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import './ResultContainer.css';
import SearchResultItem from './SearchResultItem';
const ResultsContainer = () => {
  const { searchResults, comparedRepos, setComparedRepos } =
    useContext(DataContext);

  const handleAddToComparsion = (e) => {
    let addElement = searchResults.filter(
      (element, index) => e.target.value == index
    );
    setComparedRepos([...comparedRepos, addElement]);
    e.target.classList.add('disable');
    e.target.classList.remove('addButton');
  };
  return (
    <>
      {searchResults.map((element, index) => {
        return (
          <React.Fragment key={index}>
            <SearchResultItem
              element={element}
              index={index}
              handleAddToComparsion={handleAddToComparsion}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ResultsContainer;

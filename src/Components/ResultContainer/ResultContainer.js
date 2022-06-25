import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import './ResultContainer.css';
const ResultsContainer = () => {
  const { searchResults, comparedRepos, setComparedRepos } =
    useContext(DataContext);
  const handleAddToComparsion = (e) => {
    let addElement = searchResults.filter(
      (element, index) => e.target.value == index
    );
    setComparedRepos([...comparedRepos, addElement]);
  };
  return (
    <>
      {searchResults.map((element, index) => {
        return (
          <div className="resultItem" key={index}>
            <div className="title">
              <a target="_blank" href={element.svn_url} rel="noreferrer">
                {element.full_name}
              </a>
            </div>
            <p>{element.owner.login}</p>
            <div className="itemDetails">
              <span>
                <b>descrpiton:</b>
                {element.description}
              </span>
              <button value={index} onClick={handleAddToComparsion}>
                Add
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ResultsContainer;

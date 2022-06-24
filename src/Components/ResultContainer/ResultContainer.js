import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import './ResultContainer.css';
const ResultsContainer = () => {
  const { searchResults } = useContext(DataContext);
  console.log(searchResults);
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
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ResultsContainer;

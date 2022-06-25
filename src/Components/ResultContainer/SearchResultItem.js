import React, { useState } from 'react';
import './ResultContainer.css';
const SearchResultItem = ({ element, index, handleAddToComparsion }) => {
  const [disable, setDisable] = useState(false);

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
        <button
          className="addButton"
          disabled={disable}
          value={index}
          onClick={(e) => {
            handleAddToComparsion(e);
            setDisable(true);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SearchResultItem;

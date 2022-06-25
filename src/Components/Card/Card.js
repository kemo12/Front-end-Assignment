import React, { useContext, useState } from 'react';
import { DataContext } from '../../Contexts/dataContext';
import './Card.css';

const Card = ({ element }) => {
  let elementData = element[0];
  const { comparedRepos, setComparedRepos } = useContext(DataContext);
  const handleDelete = (itemId) => {
    let m = comparedRepos.filter((element) => element[0].id != itemId);
    setComparedRepos(m);
  };
  return (
    <div className="a-box" key={elementData.id}>
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img alt="card" src={elementData.owner.avatar_url} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{elementData.full_name}</h3>
        <div>
          <ul>
            <li>
              <span>Stars:</span>
              <span>{elementData.stargazers_count}</span>
            </li>
            <li>
              <span>forks:</span>
              <span>{elementData.forks_count}</span>
            </li>
            <li>
              <span>issues:</span>
              <span>{elementData.open_issues_count}</span>
            </li>
            <li>
              <span>creation date:</span>
              <span>{elementData.created_at.substr(0, 10)}</span>
            </li>
            <li>
              <span>last update date:</span>
              <span>{elementData.updated_at.substr(0, 10)}</span>
            </li>
            <li>
              <span>language:</span>
              <span>
                {elementData.language != null ? elementData.language : '-'}
              </span>
            </li>
            <li>
              <span>license type:</span>
              <span>
                {elementData.license != null ? elementData.license.name : '-'}
              </span>
            </li>
          </ul>
          <button onClick={() => handleDelete(elementData.id)}>remove</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

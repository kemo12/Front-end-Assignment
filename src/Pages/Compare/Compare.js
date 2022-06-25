import React, { useContext } from 'react';
import './Compare.css';
import { Card } from './../../Components';
import { DataContext } from '../../Contexts/dataContext';
const Compare = () => {
  const { comparedRepos } = useContext(DataContext);

  return comparedRepos.length != 0 ? (
    <div className="compareContainer">
      {comparedRepos.map((element, index) => {
        return (
          <React.Fragment key={index}>
            <Card element={element} key={index} />
          </React.Fragment>
        );
      })}
    </div>
  ) : (
    <div className="empty">
      <h1>there is no repo added :)</h1>
    </div>
  );
};

export default Compare;

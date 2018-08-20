import React from 'react';
import './../App.css';
const Cards = props => {
  return (
    <div className="card">
      <div
        className="card-item"
        style={{ fontSize: '23px', fontWeight: 'bold' }}
      >
        {props.name}
      </div>
      <div className="card-item">{props.price}</div>
    </div>
  );
};

export default Cards;

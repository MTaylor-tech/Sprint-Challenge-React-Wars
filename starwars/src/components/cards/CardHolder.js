import React from 'react';
import SWCard from './SWCard.js';


function CardHolder (props) {
  return (
      <div className="cardHolder">
      {props.people.map(person=><SWCard person={person} films={props.films} />)}
      </div>
  );
}

export default CardHolder;

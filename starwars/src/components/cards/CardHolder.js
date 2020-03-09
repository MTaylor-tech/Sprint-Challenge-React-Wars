import React from 'react';
import SWCard from './SWCard.js';
import {CardColumns} from 'reactstrap';


function CardHolder (props) {
  return (
      <CardColumns>
        {props.people.map(person=><SWCard person={person} films={props.films} key={person.edited} />)}
      </CardColumns>
  );
}

export default CardHolder;

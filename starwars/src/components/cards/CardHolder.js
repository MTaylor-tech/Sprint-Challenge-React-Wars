import React, {useState, useEffect} from 'react';
import SWCard from './SWCard.js';
import {CardColumns} from 'reactstrap';


function CardHolder (props) {
  const [films, setFilms] = useState(props.films);

  useEffect(()=>{
    setFilms(props.films);
  },[props.films]);

  return (
      <CardColumns>
        {props.people.map(person=><SWCard person={person} films={films} key={person.edited} />)}
      </CardColumns>
  );
}

export default CardHolder;

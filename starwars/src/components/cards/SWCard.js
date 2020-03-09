import React, {useEffect, useState, forceUpdate} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader
} from 'reactstrap';
import FilmList from './FilmList.js';
import axios from 'axios';


function SWCard (props) {
  const [personFilms, setPersonFilms] = useState(props.person.films);
  const [allFilms, setAllFilms] = useState(props.films);

  useEffect(()=>{
    setPersonFilms(props.person.films);
    setAllFilms(props.films);
  },[props.person.films, props.films])

  return (
        <Card body outline color="info">
        <CardHeader>{props.person.name}</CardHeader>
        <CardBody>
          <CardTitle>{props.person.birth_year}</CardTitle>
          <FilmList allFilms={allFilms} personFilms={personFilms} />
        </CardBody>
      </Card>
  );

}

export default SWCard;

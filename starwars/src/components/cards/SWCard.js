import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


function SWCard (props) {

  return (
        <Card>
        <CardBody>
          <CardTitle>{props.person.name}</CardTitle>
          <CardSubtitle>{props.person.birth_year}</CardSubtitle>
          <CardText>{props.person.films.map(film=>props.films[parseInt(film[film.length-2])].name)}</CardText>
        </CardBody>
      </Card>
  );

}

export default SWCard;

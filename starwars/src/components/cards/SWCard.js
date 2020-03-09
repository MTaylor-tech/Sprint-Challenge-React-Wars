import React, {useEffect, useState} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader
} from 'reactstrap';
import FilmList from './FilmList.js';
import axios from 'axios';


function SWCard (props) {
  // const [imageURL, setImageURL] = useState('');

  //useEffect(
  //  axios({
  //    "method":"GET",
  //    "url":"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
  //    "headers":{
  //      "content-type":"application/octet-stream",
  //      "x-rapidapi-host":"contextualwebsearch-websearch-v1.p.rapidapi.com",
  //      "x-rapidapi-key":"27683fcc8bmsh9beef3e502124a8p15ad68jsnd6c580ded224"
  //    },"params":{
  //      "autoCorrect":"false",
  //      "pageNumber":"1",
  //      "pageSize":"1",
  //      "q":props.person.name,
  //      "safeSearch":"true"
  //    }
  //    })
  //    .then((response)=>{
  //      console.log(response);
  //      setImageURL(response.data.value[0].url);
  //    })
  //    .catch((error)=>{
  //      console.log(error)
  //    }), []);
  //<CardImg top width="100%" src={imageURL} alt={props.person.name} />



  return (
        <Card body inverse color="info">
        <CardHeader>{props.person.name}</CardHeader>
        <CardBody>
          <CardTitle>{props.person.birth_year}</CardTitle>
          <FilmList allFilms={props.films} personFilms={props.person.films} />
        </CardBody>
      </Card>
  );

}

export default SWCard;

import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CardHolder from './components/cards/CardHolder.js';
import {Button, ButtonGroup} from 'reactstrap';

const swapiCall = 'https://swapi.co/api/';
const peopleCall = 'people/';
const filmsCall = 'films/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [apiCall, setApiCall] = useState(`${swapiCall}${peopleCall}`);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [films, setFilms] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
      axios.get(`${swapiCall}${filmsCall}`)
    .then(function (response) {
      console.log(response);
      setFilms(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })}
    ,[]);

  useEffect(()=>{
    axios.get(`${apiCall}`)
  .then(function (response) {
    console.log(response);
    setPrevPage(response.data.previous);
    setNextPage(response.data.next);
    setPeople(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
  })}
  ,[apiCall]);

  const goToNext = () => {
    setApiCall(nextPage);
  }

  const goToPrev = () => {
    setApiCall(prevPage);
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ButtonGroup>
        {prevPage!=null?<Button outline color="info" onClick={goToPrev}>Previous</Button>:<></>}
        {nextPage!=null?<Button outline color="info" onClick={goToNext}>Next</Button>:<></>}
      </ButtonGroup>
      <br />
      <br />
      <CardHolder people={people} films={films} />
    </div>
  );
}

export default App;

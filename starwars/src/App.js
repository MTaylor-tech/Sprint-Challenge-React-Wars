import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CardHolder from './components/cards/CardHolder.js';

const swapiCall = 'https://swapi.co/api/';
const peopleCall = 'people/';
const filmsCall = 'films/';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(2);
  const [prevPage, setPrevPage] = useState(0);
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
    axios.get(`${swapiCall}${peopleCall}`, {
    params: {
      page: page
    }
  })
  .then(function (response) {
    console.log(response);
    setPeople(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
  })}
  ,[page]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardHolder people={people} films={films} />
    </div>
  );
}

export default App;

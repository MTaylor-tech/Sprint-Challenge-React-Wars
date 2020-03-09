import React, {useState, useEffect} from 'react';

function FilmList (props) {
  const [films, setFilms] = useState([]);

  useEffect(()=>
    setFilms(props.personFilms.map(film=>{
      let i = parseInt(film.charAt(film.length-2))-1;
      return (props.allFilms[i]);
    }))
  ,[films]);

  return (
    <ul>
      {films.map(film=>film!=undefined?<li>{film.title}</li>:<></>)}
    </ul>
  );

}

export default FilmList;

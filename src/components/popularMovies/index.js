import React from "react";
import PopularMovies from "../../pages/PopularMoviesPage";
import Movie from "../movieCard";
import "./popularMovies.css";

const PopularMovies = props => {
  const movieCards = props.movies.map(m => (
    <Movie key={m.id} movie={m} buttonHandler={props.buttonHandler} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default PopularMovies;
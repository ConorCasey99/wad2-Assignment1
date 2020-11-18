import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToFavoriteButton from '../components/buttons/addToFavorites'
import {MoviesContext} from '../contexts/moviesContext'

const PopularMovies = () => {
  const context = useContext(MoviesContext);
  const popular = context.popular.filter((m) => {  // New
    return !("popular" in m);
  });

  return (
    <PageTemplate
      title="Popular Movies"
      movies={popular}  /* Changed */
      action={(movie) => {
        return <AddToFavoriteButton movie={movie} />;
      }}
    />
  );
};

export default PopularMovies;
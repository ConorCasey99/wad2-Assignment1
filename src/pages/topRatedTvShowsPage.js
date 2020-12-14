import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import AddToFavoriteTvShowsButton from '../components/buttons/addToFavoriteTvShowsButton'
import {TvShowsContext} from '../contexts/tvShowsContext'

const TopRatedTvShowsPage = () => {
  const context = useContext(TvShowsContext);
  const topRated = context.topRated.filter((m) => {  
    return !("favoriteTvShow" in m);
  });

  return (
    <PageTemplate
      name="Top Rated TvShows No."
      tvShows={topRated} 
      action={(tvShow) => {
      return <AddToFavoriteTvShowsButton tvShow={tvShow} />;
      }}
    />
  );
};

export default TopRatedTvShowsPage;

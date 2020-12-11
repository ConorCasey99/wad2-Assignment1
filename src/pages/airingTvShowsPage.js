import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import AddToFavoriteTvShowsButton from '../components/buttons/addToFavoriteTvShowsButton'
import {TvShowsContext} from '../contexts/tvShowsContext'

const AiringTvShowsPage = () => {
  const context = useContext(TvShowsContext);
  const airing = context.airing.filter((m) => {  
    return !("favoriteTvShow" in m);
  });

  return (
    <PageTemplate
      name="Airing TvShows No."
      tvShows={airing} 
      action={(tvShow) => {
      return <AddToFavoriteTvShowsButton tvShow={tvShow} />;
      }}
    />
  );
};

export default AiringTvShowsPage;

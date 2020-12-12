import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import AddToFavoriteTvShowsButton from '../components/buttons/addToFavoriteTvShowsButton'
import {TopRatedContext} from '../contexts/topRatedContext'

const AiringTvShowsPage = () => {
  const context = useContext(TopRatedContext);
  const topRated = context.topRated.filter((m) => {  
    return !("topRated" in m);
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

export default AiringTvShowsPage;

import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import AddToCurrentlyWatchingTvShowsButton from '../components/buttons/addToCurrentlyWatching'
import {TvShowsContext} from '../contexts/tvShowsContext'

const AiringTvShowsPage = () => {
  const context = useContext(TvShowsContext);
  const airing = context.airing.filter((m) => {  
    return !("airing" in m);
  });

  return (
    <PageTemplate
      name="Airing TvShows No."
      tvShows={airing} 
      action={(tvShow) => {
      return <AddToCurrentlyWatchingTvShowsButton tvShow={tvShow} />;
      }}
    />
  );
};

export default AiringTvShowsPage;

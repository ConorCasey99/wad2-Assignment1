import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import AddToFavoriteTvShowsButton from '../components/buttons/addToFavoriteTvShowsButton'
import {TvShowsContext} from '../contexts/tvShowsContext'

const TvShowListPage = () => {
  const context = useContext(TvShowsContext);
  const tvShows = context.tvShows.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      name="Popular TvShows No."
      tvShows={tvShows}  /* Changed */
      action={(tvShow) => {
      return <AddToFavoriteTvShowsButton tvShow={tvShow} />;
      }}
    />
  );
};

export default TvShowListPage;

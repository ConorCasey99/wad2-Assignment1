import React, {useContext} from "react";
import TvShowListPageTemplate from "../components/templateTvShowListPage";
import AddTvShowReviewButton from '../components/buttons/addTvShowReview'
import {TvShowsContext} from '../contexts/tvShowsContext'

const CurrentlyWatchingPage = ()=> {
  const context = useContext(TvShowsContext);
  const CurrentlyWatchingTvShows = context.airing.filter( m => m.airing )
  return (
    <TvShowListPageTemplate
      tvShows={CurrentlyWatchingTvShows}
      name={"Currently Watching Shows"}
      action={tvShow => <AddTvShowReviewButton tvShow={tvShow} />}
    />
  );
};

export default CurrentlyWatchingPage;
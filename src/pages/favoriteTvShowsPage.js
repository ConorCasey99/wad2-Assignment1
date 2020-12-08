import React, {useContext} from "react";
import TvShowListPageTemplate from "../components/templateTvShowListPage";
import AddTvShowReviewButton from '../components/buttons/addReview'
import {TvShowsContext} from '../contexts/tvShowsContext'

const FavoriteTvShowsPage = props => {
  const context = useContext(TvShowsContext);
  const favorites = context.tvShows.filter( m => m.favorite )
  return (
    <TvShowListPageTemplate
      tvShows={favorites}
      title={"Favorite Tv Shows"}
      action={tvShow => <AddTvShowReviewButton tvShow={tvShow} />}
    />
  );
};

export default FavoriteTvShowsPage;
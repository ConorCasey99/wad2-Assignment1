import React from "react";
import PageTemplate from '../components/templateMoviePage'
import TvShowReview from "../components/tvShowReview";

const tvShowReviewPage = (props) => {
  return (
      <PageTemplate tvShow={props.location.state.tvShow}>
        <TvShowReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default tvShowReviewPage;
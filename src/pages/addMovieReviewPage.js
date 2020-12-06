import React from "react";
import PageTemplate from "../components/templateTvShowPage";
import ReviewForm from '../components/reviewForm'

const TvShowReviewFormPage = props => {

  return (
      <PageTemplate tvShow={props.location.state.tvShow}>
          <ReviewForm tvShow={props.location.state.tvShow} />
      </PageTemplate>
  );
};
export default TvShowReviewFormPage;
import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReviews from "../components/tvShowReview";
import useTvShow from "../hooks/useTvShow";

const TvShowPage = props => {
  const { id } = props.match.params;
  const [tvShow] = useTvShow(id)  // NEW
  return (
    <>
    {tvShow ? (
      <>
        <PageTemplate tvShow={tvShow}>
          <TvShowDetails tvShow={tvShow} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvShows/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvShows/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/tvShows/:id/reviews`}
          render={props => <TvShowReviews tvShow={tvShow} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for tv show details</p>
    )}
  </>
  );
    }

    export default withRouter(TvShowPage);
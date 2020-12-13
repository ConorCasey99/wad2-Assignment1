import React, { useContext } from "react";
import {TvShowsContext} from "../../contexts/tvShowsContext";

const AddToCurrentlyWatchingTvShows = ({ tvShow }) => {
  const context = useContext(TvShowsContext);
  
  const handleAddToCurrentlyWatchingTvShows = e => {
    e.preventDefault();
    context.addToCurrentlyWatchingTvShows(tvShow.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToCurrentlyWatchingTvShows}
    >
      Add to Currently Watching
    </button>
  );
};

export default AddToCurrentlyWatchingTvShows;
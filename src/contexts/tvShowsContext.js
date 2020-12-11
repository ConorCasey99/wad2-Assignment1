import React, { useEffect, createContext, useReducer } from "react";
import {getTvShows, getAiringTvShows} from "../api/tmdb-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite-tvShow":
        return {
          tvShows: state.tvShows.map((m) =>
            m.id === action.payload.tvShow.id ? { ...m, favoriteTvShow: true } : m
          ),
          airing: [...state.airing]
        };
    case "load":
      return { tvShows: action.payload.tvShows, airing: [...state.airing]};
    case "load-airing":
      return { airing: action.payload.tvShows, tvShows: [...state.tvShows]};        
    case "add-TvShowReview":
      return {
        tvShows: state.tvShows.map((m) =>
          m.id === action.payload.tvShow.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        airing: [...state.airing],
      };
    default:
      return state;
  }
};

const TvShowsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvShows: [], airing:[] });

  const addToFavoriteTvShows = (tvShowId) => {
    const index = state.tvShows.map((m) => m.id).indexOf(tvShowId);
    dispatch({ type: "add-favorite-tvShow", payload: { tvShow: state.tvShows[index] } });
  };

  const addTvShowReview = (tvShow, review) => {
    dispatch({ type: "add-TvShowReview", payload: { tvShow, review } });
  };

  useEffect(() => {
    getTvShows().then((tvShows) => {
      dispatch({ type: "load", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAiringTvShows().then((tvShows) => {
      dispatch({ type: "load-airing", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows: state.tvShows,
        airing: state.airing,
        addToFavoriteTvShows: addToFavoriteTvShows,
        addTvShowReview: addTvShowReview,
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;
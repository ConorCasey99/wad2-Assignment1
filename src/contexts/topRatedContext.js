import React, { useEffect, createContext, useReducer } from "react";
import {getTvShows, getTopRatedTvShows} from "../api/tmdb-api";

export const TopRatedContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite-tvShow":
        return {
          tvShows: state.tvShows.map((m) =>
            m.id === action.payload.tvShow.id ? { ...m, favoriteTvShow: true } : m
          ),
          topRated: [...state.topRated]
        };

    case "load":
      return { tvShows: action.payload.tvShows, topRated: [...state.topRated]};
    case "load-topRated":
      return { topRated: action.payload.tvShows, tvShows: [...state.tvShows]}; 

    case "add-TvShowReview":
      return {
        tvShows: state.tvShows.map((m) =>
          m.id === action.payload.tvShow.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        topRated: [...state.topRated]
      };
    default:
      return state;
  }
};

const TopRatedContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvShows: [], topRated:[] });

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
    getTopRatedTvShows().then((tvShows) => {
      dispatch({ type: "load-topRated", payload: { tvShows } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TopRatedContext.Provider
      value={{
        tvShows: state.tvShows,
        topRated: state.topRated,
        addToFavoriteTvShows: addToFavoriteTvShows,
        addTvShowReview: addTvShowReview,
      }}
    >
      {props.children}
    </TopRatedContext.Provider>
  );
};

export default TopRatedContextProvider;
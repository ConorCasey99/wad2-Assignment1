import React, { useEffect, createContext, useReducer } from "react";
import {getPopularPeople} from "../api/tmdb-api";
import { MoviesContext } from "./moviesContext";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {

        case "load":
            return { people: action.payload.people, people: [...state.people] };
            default:
      return state;
  }
};

const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { people: [] });

    useEffect(() => {
        getPopularPeople().then((people) => {
          dispatch({ type: "load", payload: { people } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  return (
      <MoviesContext.Provider
       value={{
        people: state.people
       }}
       >
           {props.children}
       </MoviesContext.Provider>
  );
    };

    export default PeopleContextProvider;
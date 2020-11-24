import React, { useEffect, createContext, useReducer } from "react";
import {getPopularPeople} from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
      case "add-favorite-person":
      return {
        people: state.people.map((p) =>
          p.id === action.payload.person.id ? { ...p, favorite: true } : p
        ),
        people: [...state.people],
      };
        case "load":
            return { people: action.payload.people, people: [...state.people] };
    default:
       return state;
  }
};

const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { people: [] });

    const addToFavoritePeople = (personId) => {
      const index = state.people.map((p) => p.id).indexOf(personId);
      dispatch({ type: "add-favorite-person", payload: { person: state.people[index] } });
    };

    useEffect(() => {
        getPopularPeople().then((people) => {
          dispatch({ type: "load", payload: { people } });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  return (
      <PeopleContext.Provider
       value={{
        people: state.people,
        addToFavoritePeople: addToFavoritePeople
       }}
       >
           {props.children}
       </PeopleContext.Provider>
  );
};

    export default PeopleContextProvider;
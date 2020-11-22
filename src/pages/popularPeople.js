import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import {PeopleContext} from '../contexts/peopleContext'

const PopularPeople = () => {
  const context = useContext(PeopleContext);
  const people = context.people.filter((p) => {  // New
    return !("people" in p);
  });

  return (
    <PageTemplate
      title="No. People"
      people={people}  /* Changed */
      action={(people) => {
      return <AddToWatchlistButton people={people} />;
      }}
    />
  );
};

export default PopularPeople;

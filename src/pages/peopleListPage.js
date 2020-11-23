import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import AddToFavoritePeopleButton from '../components/buttons/addToFavoritePeople'
import {PeopleContext} from '../contexts/peopleContext'

const PeopleListPage = () => {
  const context = useContext(PeopleContext);
  const people = context.people.filter((p) => {  // New
    return !("favorite" in p);
  });

  return (
    <PageTemplate
      title="No. People"
      people={people}  /* Changed */
      action={(person) => {
      return <AddToFavoritePeopleButton person={person} />;
      }}
    />
  );
};

export default PeopleListPage;

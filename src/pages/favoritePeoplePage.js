import React, {useContext} from "react";
import PeopleListPageTemplate from "../components/templatePeopleListPage";
import AddCommentButton from '../components/buttons/addComment'
import {PeopleContext} from '../contexts/peopleContext'

const FavoritePeoplePage = props => {
  const context = useContext(PeopleContext);
  const favoritePeople = context.people.filter( m => m.favoritePerson)
  return (
    <PeopleListPageTemplate
      people={favoritePeople}
      name={"Your Favorite People"}
      action={person => <AddCommentButton person={person} />}
    />
  );
};

export default FavoritePeoplePage;
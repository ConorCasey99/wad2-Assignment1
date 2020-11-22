import React, { useState } from "react";
import Header from "../headerPeopleList";
import PeopleList from "../peopleList";
import FilterControls from "../filterControls";

const PeopleListPageTemplate = ({ people, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header name={name} numPeople={displayedPeople.length} />
      <FilterControls onUserInput={handleChange} numPeople={displayedPeople.length}/>
      <PeopleList
        action={action}
        People={displayedPeople}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;
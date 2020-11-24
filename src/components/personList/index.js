import React from "react";
import Person from "../personCard/";
import "./personList.css";

const PersonList = ({people, action}) => {
  const personCards = people.map(p => (
    <Person key={p.id} person={p} action={action} />
  ));
  return <div className="row movies bg-info">{personCards}</div>;
};

export default PersonList;
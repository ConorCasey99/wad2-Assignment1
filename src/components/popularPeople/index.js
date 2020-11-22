import React from "react";
import PopularPeople from "../../pages/PopularPeoplePage";
import People from "../peopleCard";
import "./popularPeople.css";

const PopularPeople = props => {
  const peopleCards = props.people.map(p => (
    <Movie key={p.id} person={p} buttonHandler={props.buttonHandler} />
  ));
  return <div className="row movies bg-info">{peopleCards}</div>;
};

export default PopularPeople;
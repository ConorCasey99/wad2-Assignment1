import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {person.birthday}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          gender
        </li>
        <li key="rdv" className="list-group-item ">
          {person.gender}
        </li>
        <li key="rdl" className="list-group-item list-group-item-dark">
          Biography
        </li>
        <li key="rdm" className="list-group-item ">
          {person.biography}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="kf" className="list-group-item list-group-item-dark">
          Known For 
        </li>
        {person.known_for.map(k => (
          <li key={k.poster_path} className="list-group-item">
            {k.name}
          </li>
        ))}
      </ul>
    </>
  );
};
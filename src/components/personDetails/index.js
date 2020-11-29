import React from "react";
import "./personDetails.css";

// eslint-disable-next-line
export default ({ person}) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Also known as
        </li>
        <li key="rut" className="list-group-item ">
          {person.also_known_as}
        </li>
        </ul>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="rut" className="list-group-item ">
          {person.popularity}
        </li>
        </ul>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {person.birthday}
        </li>
        </ul>
        <ul className="list-group list-group-horizontal">
        <li key="rdh" className="list-group-item list-group-item-dark">
          gender
        </li>
        <li key="rdv" className="list-group-item ">
          {person.gender}
        </li>
        </ul> 
        <ul className="list-group list-group-horizontal">
        <li key="rdh" className="list-group-item list-group-item-dark">
          From
        </li>
        <li key="rdv" className="list-group-item ">
          {person.place_of_birth}
        </li>
        </ul>

        <ul className="list-group list-group-vertical">
        <li key="rdl" className="list-group-item list-group-item-dark">
          Biography
        </li>
        <li key="rdm" className="list-group-item ">
          {person.biography}
        </li>
      </ul>

      
    </>
  );
};
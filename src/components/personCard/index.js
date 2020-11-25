import React from "react";
import { Link } from "react-router-dom";
import "./personCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonCard = ({person, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/people/${person.id}`}>
        <img
          className="card-img-tag center "
          alt={person.name}
          src={
            person.poster_path
              ? `https://image.tmdb.org/t/p/w500/${person.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{person.name}</h4>
    
        </div>
        <div className="card-footer">
           {action(person)}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
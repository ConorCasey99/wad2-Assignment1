import React from "react";
import { Link } from "react-router-dom";

const CommentButton = ({ person }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/comments/form`,
        state: {
          person: person
        }
      }}
    >
      Write a Comment
    </Link>
  );
};

export default CommentButton;
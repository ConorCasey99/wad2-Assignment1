import React from "react";
// eslint-disable-next-line react-hooks/exhaustive-deps
export default ({ review }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </>
  );
};
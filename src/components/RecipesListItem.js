import React from "react";

const RecipesListItem = props => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.ingredients}</p>
      <img src={props.thumbnail} alt="" />
    </div>
  );
};

export default RecipesListItem;

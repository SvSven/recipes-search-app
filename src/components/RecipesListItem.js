import React from "react";

const RecipesListItem = props => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="box is-flex recipe"
    >
      <div className="recipe-thumbnail">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="recipe-content">
        <h3 className="recipe-content-title">{props.title}</h3>
        <p className="recipe-content-ingredients">{props.ingredients}</p>
      </div>
    </a>
  );
};

export default RecipesListItem;

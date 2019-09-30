import React from "react";
import RecipesListItem from "./RecipesListItem";

import "./recipes-list.scss";

const RecipesList = props => {
  return (
    <div id="recipes-list">
      {props.recipes.map(recipe => {
        return (
          <RecipesListItem
            key={recipe.title}
            title={recipe.title}
            url={recipe.href}
            ingredients={recipe.ingredients}
            thumbnail={recipe.thumbnail}
          />
        );
      })}
    </div>
  );
};

export default RecipesList;

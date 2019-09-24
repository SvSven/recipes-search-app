import React from "react";
import RecipesListItem from "./RecipesListItem";

const RecipesList = props => {
  return (
    <div>
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

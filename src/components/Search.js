import React, { useState } from "react";
import Axios from "axios";

import SearchInput from "./SearchInput";
import RecipesList from "./RecipesList";

const Search = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearchInputChange = event => {
    setIngredients(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();

    // recipepuppy doesn't allow cors, use this proxy for testing
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

    Axios.get(corsAnywhere + "http://www.recipepuppy.com/api/", {
      params: {
        i: ingredients
      }
    }).then(response => {
      setRecipes(response.data.results);
    });
  };

  return (
    <div>
      <SearchInput
        value={ingredients}
        handleOnChange={handleSearchInputChange}
        handleOnSubmit={handleSearchSubmit}
      />
      {recipes.length ? <RecipesList recipes={recipes} /> : null}
    </div>
  );
};

export default Search;

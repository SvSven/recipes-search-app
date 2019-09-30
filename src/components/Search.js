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
    <>
      <div className="section">
        <div className="container">
          <div className="box" style={{ textAlign: "center" }}>
            <h1 className="title is-2">Recipe finder</h1>
            <SearchInput
              value={ingredients}
              handleOnChange={handleSearchInputChange}
              handleOnSubmit={handleSearchSubmit}
            />
            <p style={{ marginTop: "1em" }}>
              Enter a list of ingredients, seperated by commas
            </p>
          </div>
        </div>
      </div>
      {recipes.length ? (
        <div className="section">
          <div className="container">
            <h3 className="title is-3">Showing recipes for "{ingredients}"</h3>
            <RecipesList recipes={recipes} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Search;

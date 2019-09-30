import React, { useState } from "react";
import Axios from "axios";

import SearchInput from "./SearchInput";
import RecipesList from "./RecipesList";

const Search = () => {
  const [ingredients, setIngredients] = useState("");
  const [searchString, setSearchString] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const API_HOST = "http://www.recipepuppy.com/api/";

  const handleSearchInputChange = event => {
    setIngredients(event.target.value);
  };

  const handleSearchSubmit = async event => {
    event.preventDefault();

    // recipepuppy doesn't allow cors, use corsAnywhere for testing
    const response = await Axios.get(corsAnywhere + API_HOST, {
      params: {
        i: ingredients
      }
    });

    setSearchString(ingredients);
    setIngredients("");
    setRecipes(response.data.results);
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
            <h3 className="title is-3">Showing recipes for "{searchString}"</h3>
            <RecipesList recipes={recipes} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Search;

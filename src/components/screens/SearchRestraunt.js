import React, { useState } from "react";
import "../styles/recipeSearch.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import styles from "../styles/recipe.module.css";
import Recipe from "../customComponents/Recipe";

export default function App() {
  const APP_KEY = "7fff2f623c6e4b04b1b65abe18e15414";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  const [recipeSearch, setRecipeSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  function handleButtonClick() {
    console.log(recipeSearch);
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${recipeSearch}&number=5&apiKey=${APP_KEY}`
      )
      .then((response) => {
        console.log(response.data.results);
        setRecipes(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="search-input-container">
        <input
          className="search-input"
          value={recipeSearch}
          onInput={(e) => setRecipeSearch(e.target.value)}
          placeholder="Enter Recipes to be Searched Of"
        />
        <button onClick={handleButtonClick} className="search-button">
          <SearchIcon />
        </button>
      </div>
      <div className={styles.recipeContainer}>
        {recipes.map((item, index) => (
          <Recipe img={item.image} name={item.title} summary={item.summary} />
        ))}
      </div>
    </div>
  );
}

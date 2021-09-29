import React, { useState, useEffect } from "react";
import styles from "../styles/recipe.module.css";
import Recipe from "../customComponents/Recipe";
import axios from "axios";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const APP_KEY = "7fff2f623c6e4b04b1b65abe18e15414";
  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${APP_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data.recipes);
      });
  }, []);
  console.log('recipes', recipes);
  return (
    <div
      style={{
        fontFamily: "karla",
        textAlign: "center",
        height: "100%",
      }}
    >
      <h1 className={styles.recipeHeading}> Some Random Recipes</h1>
      <div className={styles.recipeContainer}>
        {recipes.map((item, index) => (
          <Recipe img={item.image} name={item.title} summary={item.summary} />
        ))}
      </div>
    </div>
  );
}

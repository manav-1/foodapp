import React, { useState, useEffect } from "react";
import styles from "../styles/recipe.module.css";
// eslint-disable-next-line
import { Text } from "react-native";
import Recipe from "../customComponents/Recipe";

export default function App() {
  // eslint-disable-next-line
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {}, []);

  return (
    <div
      style={{
        fontFamily: "karla",
        textAlign: "center",
        fontSize: "1.5rem",
        height: "100%",
      }}
    >
      <h1> Some Random Recipes</h1>
      <div className={styles.recipeContainer}>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
}

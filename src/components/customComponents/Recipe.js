import styles from "../styles/recipe.module.css";
import React from "react";

export default function Recipe() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recipe</h2>
      <img
        className={styles.img}
        src="https://picsum.photos/250"
        alt="recipe"
      />
      <p className={styles.recipeText}>
        Ipsum proident Lorem labore adipisicing commodo velit dolor pariatur
        duis aliqua nulla nulla.
      </p>
    </div>
  );
}

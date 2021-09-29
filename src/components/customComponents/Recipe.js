import styles from "../styles/recipe.module.css";
import React from "react";

export default function Recipe({ img, name, summary }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <img className={styles.img} src={img} alt="recipe" />
      <p className={styles.recipeText}>{summary}</p>
    </div>
  );
}

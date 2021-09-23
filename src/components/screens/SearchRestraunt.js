import React, { useState } from "react";
// eslint-disable-next-line 
import { Text } from "react-native";

export default function App() {
  const [recipeSearch, setRecipeSearch] = useState("");

  return (
    <div>
      <input
        style={{
          width: "80%",
          padding: "0.8rem",
          borderRadius: "0.5rem",
        }}
        value={recipeSearch}
        onInput={(e) => setRecipeSearch(e.target.value)}
        placeholder="Enter Recipes to be Searched Of"
      />
      <button
        style={{
          padding: "0.6rem 2rem",
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "karla",
          backgroundColor: "#112031",
          border: "none",
          color: "#fff",
          margin: "0 1rem",
        }}
      >
        Search
      </button>
    </div>
  );
}

import React from "react";

export default function CustomerDashboard({ navigation }) {
  return (
    <p onClick={() => navigation.navigate("Landing")}>Customer Dashboard</p>
  );
}

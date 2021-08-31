import React from "react";

export default function CustomerDashboard({ navigation }) {
  return (
    <p onClick={() => navigation.push("Landing")}>Customer Dashboard</p>
  );
}

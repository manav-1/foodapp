import React from "react";
import { Helmet } from "react-helmet";

export default function Login({ navigation }) {
  return (
    <div>
      <Helmet>
        <title>Tomato Foods | Manav Arora</title>
      </Helmet>
      <p onClick={() => navigation.goBack()}>LoginScreen</p>
    </div>
  );
}

import React from "react";
import Landing from "../screens/Landing";
import LoginSignUp from "../screens/LoginSignUp";
import CustomerDashboard from "../screens/CustomerDashboard";
import RestrauntDashboard from "../screens/RestrauntDashboard";
import RestrauntSignUpLogin from "../screens/RestrauntSignUpLogin";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function LandingNavigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginSignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Restraunt SignUp"
          component={RestrauntSignUpLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Customer Dashboard"
          component={CustomerDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Restraunt Dashboard"
          component={RestrauntDashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

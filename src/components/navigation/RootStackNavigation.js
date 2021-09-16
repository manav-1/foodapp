import React from "react";
import Landing from "../screens/Landing";
import LoginSignUp from "../screens/LoginSignUp";
import DashboardBottomNav from "./DashBoardBottomNav";
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
          name="CustomerDashboard"
          component={DashboardBottomNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

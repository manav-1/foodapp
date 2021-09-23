import React from "react";
import Landing from "../screens/Landing";
import LoginSignUp from "../screens/LoginSignUp";
import DashboardBottomNav from "./DashBoardBottomNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function LandingNavigation() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <LoginSignUp />
        </Route>
        <Route path="/dashboard">
          <DashboardBottomNav />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

/* <NavigationContainer>
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
    </NavigationContainer> */

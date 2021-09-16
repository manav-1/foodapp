import "../styles/bottomnav.css";
import React, { useState } from "react";
import Dashboard from "../screens/Dashboard";
import SearchRestraunt from "../screens/SearchRestraunt";
import Profile from "../screens/Profile";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function BottomNav({ navigation }) {
  const [component, setComponent] = useState(
    <Dashboard navigation={navigation} />
  );
  const components = [
    <Dashboard navigation={navigation} />,
    <SearchRestraunt navigation={navigation} />,
    <Profile navigation={navigation} />,
  ];

  return (
    <div className="dash-bg">
      <div className="main-bottomnav-container">
        <div className="component">{component}</div>
        <BottomNavigation
          value={component}
          className="bottom-nav"
          onChange={(event, newValue) => {
            console.log(newValue);
            setComponent(components[newValue]);
          }}
          showLabels
        >
          <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}

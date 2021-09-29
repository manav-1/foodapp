import "../styles/bottomnav.css";
import React, { useState, useEffect } from "react";
import Dashboard from "../screens/Dashboard";
import SearchRestraunt from "../screens/SearchRestraunt";
import Profile from "../screens/Profile";
import { BottomNavigation } from "@mui/material";
import { BottomNavigationAction } from "@mui/material";
import { useHistory } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";

export default function BottomNav({ navigation }) {
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("Ztoken");
      axios
        .post("https://whispering-waters-83199.herokuapp.com/verifyUser", { token })
        .then((response) => {
          if (response.status === 200 && response.data) {
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          var resp = error.response;
          if (resp.status === 406) {
            history.push("/landing")
            setOpen(true);
            setSnackBarMessage("Token Has Expired Please Login/SignUp Again");
            setSnackBarType("error");
          }
        });
    })();
  }, [history]);
  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarType, setSnackBarType] = useState("error");
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
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          severity={snackBarType}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
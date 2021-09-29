import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { Text } from "react-native";
import { useHistory } from "react-router-dom";

export default function Profile({ navigation }) {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarType, setSnackBarType] = useState("error");
  async function handleLogoutPress() {
    try {
      await AsyncStorage.removeItem("Ztoken");
      history.push("/landing");
    } catch (e) {
      setOpen(true);
      setSnackBarMessage("Some Error Occured, Please try again");
      setSnackBarType("error");
    }
  }
  return (
    <div>
      <button onClick={handleLogoutPress}>Logout</button>
      <Text>Hello World</Text>
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

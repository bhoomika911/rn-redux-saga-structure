import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import Strings_EN from "../../Constants/Strings_EN";
import styles from "./SplashScreenStyle";
import { Actions } from "react-native-router-flux";

class SplashScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //Set strings globally
    Strings = Strings_EN;
    debugger;
    Actions.DashboardScreen({
      type: "reset"
    });

    // getItem(Strings.kUSERNAME, function(res) {
    //   if (
    //     res.status == "success" &&
    //     res.result !== "" &&
    //     res.result !== null
    //   ) {
    //     let username = res.result;
    //
    //     Actions.LoginScreen({
    //       type: "reset",
    //       hideBack: true,
    //       username: username
    //     });
    //   } else {
    //     Actions.AuthScreen();
    //   }
    // });
  }

  componentWillUnmount() { }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> Splash screen</Text>
      </View>
    );
  }
}

export default SplashScreen;

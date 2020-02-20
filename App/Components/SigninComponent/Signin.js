import React, { Component } from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

let window = Dimensions.get('window');

export default class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      signinDone: false,
      test: 0
    };
  }

  addTest(a) {
    return a + 10;
  }

  testUpdateState() {
    this.setState({
      test: 200
    })
  }

  onChangeEmail(email) {
    this.setState({
      email: email,
    });
  }

  onChangePassword(password) {
    this.setState({
      password: password,
    });
  }

  onPressBtn() {
    let { email, password } = this.state;
    if (email == "a@gmail.com" && password == "123456") {
      this.setState({
        signinDone: true
      });
    }


    // let { email, password } = this.state;
    // let res = callWebservice();
    // alert("signin successfully");
  }

  callWebservice() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let { email, password } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.txtInputParent}>
          <TextInput
            style={styles.txtInput}
            onChangeText={email => this.onChangeEmail(email)}
            value={email}
            placeholder="Email"
            testID="email"
          />
        </View>
        <View style={styles.txtInputParent}>
          <TextInput
            style={styles.txtInput}
            onChangeText={password => this.onChangePassword(password)}
            value={password}
            placeholder="Password"
            testID="password"
          />
        </View>
        <TouchableHighlight
          underlayColor="transparent"
          testID="singinBtnTouchable"
          onPress={() => this.onPressBtn()}>
          <View style={styles.signinBtn} testID="singinBtn">
            <Text style={styles.signinText}>Signin</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  txtInputParent: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: 40,
    marginVertical: 10,
    width: window.width - 40,
  },
  textInput: {
    height: 40,
    width: window.width - 40,
    // paddingTop: 20,
  },
  signinBtn: {
    height: 40,
    width: window.width - 40,
    borderWidth: 1,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinText: {
    color: 'white',
    fontSize: 20,
  },
});

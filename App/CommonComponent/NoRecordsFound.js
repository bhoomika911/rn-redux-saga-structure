/*****************************************************************************************************************
 * React Native App
 * Author : Shashank H N
 * File : AttachmentListComponent.js
 * Date : 8/08/2018
 * Updated date : 8/08/2018
 * Comment : UI Implementation.
 ****************************************************************************************************************/

import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions
} from "react-native";

import IMAGES from "./../Constants/Images";
const window = Dimensions.get("window");

const NoRecordsFound = () => {
  return (
    <View style={styles.noRecordView}>
      <Image
        source={IMAGES.noRecordFound}
        style={styles.noRecordImg}
        resizeMode={"contain"}
      />
      <Text style={styles.noRecordText}>{Strings.NO_RECORDS_FOUND}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noRecordImg: {
    width: window.width * 0.4,
    height: window.width * 0.4
  },
  noRecordView: {
    width: window.width,
    height: window.height,
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff5ff"
  },
  noRecordText: {
    marginTop: window.width * 0.12,
    color: "#333333",
    fontSize: 18,
    fontWeight: Platform.OS === "ios" ? "800" : "500"
  },
  noRecordInPage: {
    marginTop: window.width * 0.03,
    color: "#999999",
    fontSize: 14,
    textAlign: "center"
  }
});

export default NoRecordsFound;

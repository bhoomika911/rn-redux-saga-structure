import { StyleSheet, Platform, Dimensions } from "react-native";

let window = Dimensions.get('window');

export default StyleSheet.create({
  circles: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: window.width,
    height: window.height,
  },
  smallShadowStyle: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    zIndex: Platform.OS === "ios" ? 500 : undefined
  },
  elevationStyle: {
    elevation: 5
  },
  zIndexIOSShadowStyle: {
    zIndex: Platform.OS === "ios" ? 600 : undefined
  },
});

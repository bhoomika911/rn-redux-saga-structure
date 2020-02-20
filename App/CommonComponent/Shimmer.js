import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import ContentLoader from "rn-content-loader";
import { Rect, Circle } from "react-native-svg";

const window = Dimensions.get("window");
const containerWidth = window.width - 10;
const splitWidth = window.width / 2;
const LineWidth = window.width - 30;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  scrollContainer: {
    flexGrow: 1
  }
});

export const ShimmerCart = ({ padding }) => (
  <ScrollView
    keyboardShouldPersistTaps="always"
    contentContainerStyle={styles.scrollContainer}
  >
    <View style={[styles.container, padding && { marginTop: 20 }]}>
      {[1, 2, 3, 4].map(function (i) {
        return (
          <ContentLoader
            primaryColor="#c5c5c5"
            secondaryColor="#ebebeb"
            height={180}
            width={containerWidth}
            key={i}
          >
            <Rect x="16" y="0" rx="5" ry="5" width="70" height="70" />
            <Rect
              x="100"
              y="17"
              rx="4"
              ry="4"
              width={LineWidth - 30}
              height="10"
            />
            <Rect x="100" y="40" rx="3" ry="3" width="250" height="10" />
            <Rect x="16" y="80" rx="3" ry="3" width={LineWidth} height="10" />
            <Rect x="16" y="100" rx="3" ry="3" width="200" height="10" />
            <Rect x="16" y="120" rx="3" ry="3" width={LineWidth} height="10" />
          </ContentLoader>
        );
      })}
    </View>
  </ScrollView>
);

export const ShimmerCards = ({ padding, numberOfItems }) => {
  let cardListArr = [1, 2, 3, 4];
  numberOfItems && (cardListArr = Array.from(Array(numberOfItems).keys()));

  return (
    <View style={[styles.container, padding && { marginTop: 20 }]}>
      {cardListArr.map(function (i) {
        return (
          <View key={i} style={{ marginBottom: 20 }}>
            <ContentLoader
              primaryColor="#c5c5c5"
              secondaryColor="#ebebeb"
              width={splitWidth}
              key={i}
            >
              <Rect
                x="12"
                y="0"
                rx="5"
                ry="5"
                width={splitWidth - 30}
                height="100"
              />
              <Rect x="12" y="115" rx="4" ry="4" width="100" height="10" />
              <Rect x="12" y="135" rx="3" ry="3" width="100" height="10" />
              <Rect
                x="12"
                y="155"
                rx="3"
                ry="3"
                width={splitWidth - 30}
                height="10"
              />
              <Rect x="12" y="170" rx="3" ry="3" width="100" height="10" />
            </ContentLoader>
          </View>
        );
      })}
    </View>
  );
};

export const ShimmerBasket = () => (
  <View style={[styles.container, { marginTop: 20 }]}>
    {[1, 2, 3, 4].map(function (i) {
      return (
        <ContentLoader
          primaryColor="#c5c5c5"
          secondaryColor="#ebebeb"
          height={130}
          width={splitWidth}
          key={i}
        >
          <Rect
            x="12"
            y="0"
            rx="4"
            ry="4"
            width={splitWidth - 30}
            height="12"
          />
          <Rect x="12" y="20" rx="3" ry="3" width="100" height="9" />
          <Rect
            x="12"
            y="40"
            rx="3"
            ry="3"
            width={splitWidth - 30}
            height="10"
          />
          <Rect x="12" y="60" rx="3" ry="3" width="100" height="9" />
        </ContentLoader>
      );
    })}
  </View>
);

export const ShimmerSupplier = () => (
  <View style={[styles.container, { marginTop: 20 }]}>
    {[1, 2, 3, 4, 5, 6].map(function (i) {
      return (
        <ContentLoader
          primaryColor="#c5c5c5"
          secondaryColor="#ebebeb"
          width={splitWidth}
          key={i}
        >
          <Circle x="20" y="0" cx="12" cy="12" r="12" />
          <Rect x="60" y="6" rx="4" ry="4" width="120" height="10" />
          <Circle x="75" y="30" cx="28" cy="28" r="28" />
          <Rect
            x="20"
            y="100"
            rx="4"
            ry="4"
            width={splitWidth - 30}
            height="10"
          />
          <Rect
            x="20"
            y="118"
            rx="4"
            ry="4"
            width={splitWidth - 30}
            height="10"
          />
          <Rect
            x="20"
            y="136"
            rx="4"
            ry="4"
            width={splitWidth - 30}
            height="10"
          />
        </ContentLoader>
      );
    })}
  </View>
);

export const ShimmerItemList = () => (
  <View style={[styles.container, { marginTop: 20 }]}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) {
      return (
        <ContentLoader
          primaryColor="#c5c5c5"
          secondaryColor="#ebebeb"
          width={splitWidth}
          height={50}
          key={i}
        >
          <Circle x="20" y="0" cx="12" cy="12" r="12" />
          <Rect x="60" y="6" rx="4" ry="4" width="120" height="10" />
        </ContentLoader>
      );
    })}
  </View>
);

export const ShimmerEvents = ({ padding }) => (
  <ScrollView
    keyboardShouldPersistTaps="always"
    contentContainerStyle={styles.scrollContainer}
  >
    <View style={[styles.container, padding && { marginTop: 20 }]}>
      {[1, 2, 3].map(function (i) {
        return (
          <ContentLoader
            primaryColor="#c5c5c5"
            secondaryColor="#ebebeb"
            height={250}
            width={containerWidth}
            key={i}
          >
            <Rect x="16" y="0" rx="3" ry="3" width="150" height="10" />
            <Rect x="16" y="18" rx="3" ry="3" width="180" height="12" />
            <Circle x="16" y="50" cx="30" cy="30" r="30" />
            <Rect
              x="100"
              y="60"
              rx="4"
              ry="4"
              width={LineWidth - 30}
              height="10"
            />
            <Rect x="100" y="90" rx="3" ry="3" width="250" height="10" />
            <Rect x="16" y="130" rx="3" ry="3" width={LineWidth} height="10" />
            <Rect x="16" y="150" rx="3" ry="3" width="200" height="10" />
            <Rect x="16" y="170" rx="3" ry="3" width={LineWidth} height="10" />
          </ContentLoader>
        );
      })}
    </View>
  </ScrollView>
);

export const ShimmerPerformnceEvent = () => (
  <ScrollView
    keyboardShouldPersistTaps="always"
    contentContainerStyle={styles.scrollContainer}
  >
    <View style={[styles.container, { marginTop: 20 }]}>
      {[1, 2, 3].map(function (i) {
        return (
          <ContentLoader
            primaryColor="#c5c5c5"
            secondaryColor="#ebebeb"
            height={220}
            width={containerWidth}
            key={i}
          >
            <Rect
              x="15"
              y="0"
              rx="3"
              ry="3"
              width={LineWidth / 2.5}
              height="9"
            />
            <Rect
              x="15"
              y="18"
              rx="3"
              ry="3"
              width={LineWidth / 1.5}
              height="10"
            />
            <Rect
              x="15"
              y="42"
              rx="3"
              ry="3"
              width={LineWidth / 2.2}
              height="14"
            />
            <Rect
              x="15"
              y="75"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="9"
            />
            <Rect
              x="15"
              y="91"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="10"
            />
            <Rect
              x="200"
              y="75"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="9"
            />
            <Rect
              x="200"
              y="91"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="10"
            />
            <Rect
              x="15"
              y="118"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="9"
            />
            <Rect
              x="15"
              y="134"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="10"
            />
            <Rect
              x="200"
              y="118"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="9"
            />
            <Rect
              x="200"
              y="134"
              rx="3"
              ry="3"
              width={LineWidth / 2.6}
              height="10"
            />
            <Rect
              x="15"
              y="160"
              rx="3"
              ry="3"
              width={LineWidth - 50}
              height="10"
            />
          </ContentLoader>
        );
      })}
    </View>
  </ScrollView>
);

export const ShimmerPurchaseOrder = () => (
  <ScrollView
    keyboardShouldPersistTaps="always"
    contentContainerStyle={styles.scrollContainer}
  >
    <View style={[styles.container, { marginTop: 20 }]}>
      {[1, 2, 3, 4].map(function (i) {
        return (
          <ContentLoader
            primaryColor="#c5c5c5"
            secondaryColor="#ebebeb"
            height={150}
            width={containerWidth}
            key={i}
          >
            <Rect
              x="15"
              y="0"
              rx="4"
              ry="4"
              width={containerWidth / 1.2}
              height="9"
            />
            <Rect
              x="15"
              y="18"
              rx="3"
              ry="3"
              width={containerWidth / 1.5}
              height="10"
            />
            <Rect
              x="15"
              y="40"
              rx="3"
              ry="3"
              width={containerWidth / 1.2}
              height="9"
            />
            <Rect
              x="15"
              y="58"
              rx="3"
              ry="3"
              width={containerWidth / 1.5}
              height="10"
            />
            <Rect
              x="15"
              y="80"
              rx="3"
              ry="3"
              width={containerWidth / 1.2}
              height="9"
            />
            <Rect
              x="15"
              y="98"
              rx="3"
              ry="3"
              width={containerWidth / 1.5}
              height="10"
            />
          </ContentLoader>
        );
      })}
    </View>
  </ScrollView>
);

export const ShimmerSearchAddress = () => (
  <View style={[styles.container, { marginTop: 20 }]}>
    {[1, 2, 3, 4].map(function (i) {
      return (
        <ContentLoader
          primaryColor="#c5c5c5"
          secondaryColor="#ebebeb"
          height={80}
          width={containerWidth}
          key={i}
        >
          <Rect
            x="12"
            y="0"
            rx="4"
            ry="4"
            width={splitWidth - 30}
            height="12"
          />
          <Rect
            x="12"
            y="25"
            rx="3"
            ry="3"
            width={splitWidth + 30}
            height="9"
          />
          <Rect
            x="12"
            y="40"
            rx="3"
            ry="3"
            width={splitWidth + 30}
            height="9"
          />
        </ContentLoader>
      );
    })}
  </View>
);

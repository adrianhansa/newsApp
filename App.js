import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import Card from "./src/components/Card";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadFonts = () => {
  return Font.loadAsync({
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("Error")}
      />
    );
  }
  return (
    <View style={styles.appContainer}>
      <Header />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

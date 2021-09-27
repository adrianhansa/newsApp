import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Card from "./src/components/Card";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />

      <View style={styles.container}>
        <Card />
        <Text>Open up App.js to start working on your app!!</Text>
        <StatusBar style="auto" />
      </View>
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import Card from "../Card";

const NewsListScreen = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({ appContainer: { flex: 1 } });

export default NewsListScreen;

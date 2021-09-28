import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../Card";

const NewsListScreen = ({ navigation }) => {
  return (
    <View style={styles.appContainer}>
      <Card navigation={navigation} id="someId" />
    </View>
  );
};

const styles = StyleSheet.create({ appContainer: { flex: 1 } });

export default NewsListScreen;

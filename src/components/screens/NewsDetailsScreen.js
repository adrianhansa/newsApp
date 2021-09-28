import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const NewsDetailsScreen = ({ route }) => {
  const [id, setId] = useState(null);
  useEffect(() => {
    setId(route.params.id);
  }, [route]);
  return (
    <View>
      <Text>NewsDetailsScreen - {id && id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewsDetailsScreen;

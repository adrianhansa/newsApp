import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = ({ navigation, id }) => {
  return (
    <Pressable onPress={() => navigation.navigate("NewsDetails", { id })}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: "https://www.borouge.com/MediaCentre/Images1/News-Website-banner-V1.JPG",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Dummy Title!</Text>
          <MaterialIcons name="favorite-outline" size={24} color="black" />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>This is a dummy description</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: { height: "100%", width: "100%" },
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  titleWrapper: {
    marginTop: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    height: "10%",
    paddingHorizontal: 15,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: "Ubuntu-bold",
  },
  description: {
    fontFamily: "Ubuntu",
  },
});

export default Card;

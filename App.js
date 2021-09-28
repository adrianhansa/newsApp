import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import NewsListScreen from "./src/components/screens/NewsListScreen";

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
  return <NewsListScreen />;
}

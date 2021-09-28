import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import store from "./redux/store";

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
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

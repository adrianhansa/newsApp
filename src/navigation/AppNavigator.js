import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import NewsListScreen from "../components/screens/NewsListScreen";
import NewsDetailsScreen from "../components/screens/NewsDetailsScreen";
import FavouritesScreen from "../components/screens/FavouritesScreen";
import AboutScreen from "../components/screens/AboutScreen";
import { MaterialIcons } from "@expo/vector-icons";

import React from "react";

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsList"
        component={NewsListScreen}
        options={{ title: "All News" }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetailsScreen}
        options={{ title: "News Details" }}
      />
      <Stack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
        options={{ title: "Fabourites News" }}
      />
    </Stack.Navigator>
  );
};

const FavouritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavouritesScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Favourites") {
            iconName = "favorite";
          }
          return <MaterialIcons name={iconName} size={24} color="black" />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={AppStack}></Tabs.Screen>
      <Tabs.Screen
        name="Favourites"
        component={FavouritesNavigator}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsNavigator}></Drawer.Screen>
      <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default AppNavigator;

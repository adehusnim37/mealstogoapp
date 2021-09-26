import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/screen/restaurant-screen";
import { SafeArea } from "./src/components/utils/safe-area";
import { RestaurantContextProvider } from "./src/services-api/restaurants/restaurant-context";
import { LocationContextProvider } from "./src/services-api/location/location-context";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Maps = () => (
  <SafeArea>
    <Text>Maps G</Text>
  </SafeArea>
);

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                    let iconName; // let karena constantnya berubah ubah

                    if (route.name === "Restaurants") {
                      iconName = "md-restaurant";
                    } else if (route.name === "Settings") {
                      iconName = "md-settings";
                    } else if (route.name === "Maps") {
                      iconName = "md-map";
                    }

                    // You can return any component that you like here!
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },

                  activeTintColor: "tomato",
                  inactiveTintColor: "gray",
                  headerShown: false,
                })}
              >
                <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                <Tab.Screen name="Maps" component={Maps} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style={"auto"} />
    </>
  );
}

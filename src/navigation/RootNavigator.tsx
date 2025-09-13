import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator() {
  const isLoggedIn = true; // replace with auth state

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

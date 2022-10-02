import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

export default function Routes() {
  const isAuthenticated = true;

  return isAuthenticated ? <AppStack /> : <AuthStack />;
}

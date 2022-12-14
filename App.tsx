import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import Routes from "./src/routes/Router";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_900Black,
  });

  useEffect(() => {
    async function loadFonts() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

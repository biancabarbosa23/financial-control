import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme.colors.secondary,
  },
  content: {
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 150,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

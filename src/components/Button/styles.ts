import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    width: 280,
    height: 50,
    borderRadius: 15,
    paddingVertical: 15,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontFamily: theme.fonts.black,
  },
});

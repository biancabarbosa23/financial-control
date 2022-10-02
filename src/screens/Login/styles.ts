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
    paddingVertical: 100,
  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  input: {
    width: 345,
    backgroundColor: theme.colors.dark_blue,
    borderRadius: 30,
    height: 55,
    fontFamily: theme.fonts.black,
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 50,
  },
});

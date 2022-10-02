import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  content: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  containerImage: {
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
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
    marginBottom: 15,
  },
});

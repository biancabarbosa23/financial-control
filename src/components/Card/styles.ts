import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark_blue,
    width: 375,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 15,
    borderRadius: 5,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: theme.colors.green,
    marginRight: 20,
  },
  text: {
    fontWeight: "500",
    fontSize: 25,
    color: theme.colors.white,
  },
  leftContainer: {
    width: "60%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    width: "40%",
    height: "70%",
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.white,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  value: {
    fontSize: 25,
    fontWeight: "700",
    color: theme.colors.white,
  },
});

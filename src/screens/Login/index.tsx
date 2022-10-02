import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

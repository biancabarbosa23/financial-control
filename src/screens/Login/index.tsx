import { View, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { theme } from "../../global/theme";

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.light_blue}
            placeholder="Senha"
          />
          <Button text="Entrar" />
        </View>
      </View>
    </View>
  );
}

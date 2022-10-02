import { View, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { theme } from "../../global/theme";
import * as Animatable from "react-native-animatable";

export function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animatable.View animation="flipInY" style={styles.containerImage}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.logo}
          />
        </Animatable.View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.light_blue}
            placeholder="Senha"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.light_blue}
            placeholder="Senha"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.light_blue}
            placeholder="Senha"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.light_blue}
            placeholder="Senha"
          />
          <Button text="Salvar" />
        </View>
      </View>
    </View>
  );
}

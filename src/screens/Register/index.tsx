import {
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { theme } from "../../global/theme";
import * as Animatable from "react-native-animatable";

export function Register() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
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
            placeholderTextColor={theme.colors.label}
            placeholder="Titulo *"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.label}
            placeholder="Valor *"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.label}
            placeholder="Data do pagamento *"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.label}
            placeholder="Tipo de conta *"
          />
          <Button text="Salvar" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

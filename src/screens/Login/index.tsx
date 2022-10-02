import { View, TextInput, Image, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { theme } from "../../global/theme";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { compareAccessData } from "../../utils/auth";
import { useEffect } from "react";

export function Login() {
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    handleButtonDisabled();
  },[password])
  
  const handleButtonDisabled = () => {
    password !== "" ? setDisabled(false): setDisabled(true);
  }

  const handleLogin = async () => {
    const access = await compareAccessData(password);

    if(access) {
      console.log("acessado");
    } else {
      console.log("erro");
    }
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.container}>
      <View style={styles.content}>
        <Animatable.View animation="flipInY" style={styles.containerImage}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.logo}
          />
        </Animatable.View>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.colors.light_blue}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          disabled = {disabled}
          text="Entrar" 
          onPress={handleLogin}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

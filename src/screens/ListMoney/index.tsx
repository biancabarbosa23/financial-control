import { View, FlatList, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/theme";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export function ListMoney() {
  const cardData = {
    text: "Cartao Renner",
    value: "40,00",
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholderTextColor={theme.colors.label}
            placeholder="Outubro - 2022"
          />
          <Text style={styles.date}>23/10/2022</Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => <Card data={cardData} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View>
          <Button text="Salvar" />
        </View>
      </View>
    </View>
  );
}

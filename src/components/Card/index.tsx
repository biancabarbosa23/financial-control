import { View, Text } from "react-native";
import { styles } from "./styles";

interface CardProps {
  text: string;
  value: string;
}

interface Props {
  data: CardProps;
}

export function Card({ data }: Props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.circle} />
          <Text style={styles.text}>{data.text}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.value}>R$ {data.value}</Text>
        </View>
      </View>
    </>
  );
}

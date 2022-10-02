import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { ListMoney } from "../screens/ListMoney";
import { Register } from "../screens/Register";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { theme } from "../global/theme";

const Tab = createBottomTabNavigator();

interface CustomProps {
  children: React.ReactNode;
  onPress(): void;
}

const CustomTabBarButton = ({ children, onPress }: CustomProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: theme.colors.light_blue,
        borderRadius: 35,
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,

          backgroundColor: theme.colors.primary,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: theme.colors.dark_blue,
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="home" size={35} color="white" />
            </View>
          ),
        }}
        // options={{
        //   tabBarIcon: ({ size, color }) => (
        //     <Entypo name="home" size={24} color="black" />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-add" size={40} color="white" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ListMoney"
        component={ListMoney}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Ionicons name="wallet-outline" size={35} color="white" /> */}
              <Entypo name="list" size={35} color="white" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

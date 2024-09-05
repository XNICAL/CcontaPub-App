import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TabOneScreen from "../../app/TabOneScreen";
import TabTwoScreen from "../../app/TabTwoScreen";

const Tab = createBottomTabNavigator();

type IconName = 'home-outline' | 'information-circle-outline' | 'list-outline' | 'help-outline';

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "TabOne":
              iconName = "information-circle-outline";
              break;
            case "TabTwo":
              iconName = "list-outline";
              break;
            default:
              iconName = "help-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      
      <Tab.Screen name="TabOne" component={TabOneScreen} />
      <Tab.Screen name="TabTwo" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
//components
import Home from "../Home";
import ShowsList from "../ShowsList";
import ShowDetails from "../ShowDetails";

export default function RootNavigator() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Shows List" component={ShowsList} />
      <Screen
        name="Shows Details"
        component={ShowDetails}
        options={({ route }) => {
          const { show } = route.params;
          return {
            title: show.name,
          };
        }}
      />
    </Navigator>
  );
}

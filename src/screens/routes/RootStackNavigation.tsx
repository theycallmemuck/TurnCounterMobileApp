import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosePlayers from "../ChoosePlayers";
import { ReactNode, FC } from "react";
import { RootStackRouteParams } from ".";
import GameTimer from "../GameTimer";

const Stack = createNativeStackNavigator<RootStackRouteParams>();

const RootStackNavigation: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="ChoosePlayers"
      >
        <Stack.Screen name="ChoosePlayers" component={ChoosePlayers} />
        <Stack.Screen name="GameTimer" component={GameTimer} />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
};

export default RootStackNavigation;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screen/Home";
import Detail from "./screen/Detail";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component={Detail} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

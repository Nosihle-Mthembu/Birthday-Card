import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen.jsx';
import CardEditor from './components/CardEditor.jsx';
import SavedCards from './components/SavedCards.jsx';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CardEditor" component={CardEditor} />
        <Stack.Screen name="SavedCards" component={SavedCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

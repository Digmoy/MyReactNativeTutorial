import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TextInputScreen from './textinput-view/Textinputview';
import MainScreen from './main-view/Main';
import ListViewScreen from './list-view/ListView';
import FlatListScreen from './flatList-view/FlatList'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name = "Main"
        component={MainScreen}
        options={{ title : 'Welcome'}}/>
        
        <Stack.Screen
        name ='TextInput'
        component = {TextInputScreen}/>

        <Stack.Screen
        name ='ListView'
        component = {ListViewScreen}/>

        <Stack.Screen
        name = 'FlatList'
        component = {FlatListScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


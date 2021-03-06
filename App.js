import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TextInputScreen from './textinput-view/Textinputview';
import MainScreen from './main-view/Main';
import ListViewScreen from './list-view/ListView';
import FlatListScreen from './flatList-view/FlatList'
import AlertScreen from './alert/alert';
import CustomAlertScreen from './alert/custom_alert';
import ImageScreen from './image/Image';
import CustomButtonScreen from './custom_button/Custom_button';
import UseEffectScreen from './useEffect/UseEffect';
import SwitchScreen from './switch/Switch';
import LoaderScreen from './Loader/Loader';
import SectionListScreen from './SectionList/SectionList';
import PressableScreen from './press/PressableScreen';
import RefreshControlScreen from './Refresh_Control/RefreshControl';
import AppearanceScreen from './Appearance/Appearance';
import DeviceInfoScreen from './DeviceInfo/DeviceInfo';
import AnimationScreen from './Animation/Animation';
import PlatformColorScreen from './PlatformColor/PlatformColor';



const Stack = createNativeStackNavigator()

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Welcome' }} />

        <Stack.Screen
          name='TextInput'
          component={TextInputScreen} />

        <Stack.Screen
          name='ListView'
          component={ListViewScreen} />

        <Stack.Screen
          name='FlatList'
          component={FlatListScreen} />

        <Stack.Screen
          name='Alert'
          component={AlertScreen} />

        <Stack.Screen
          name='Image'
          component={ImageScreen} />

        <Stack.Screen
          name='Custom_Alert'
          component={CustomAlertScreen} />

        <Stack.Screen
          name='Custom Button'
          component={CustomButtonScreen} />

        <Stack.Screen
          name='UseEffect'
          component={UseEffectScreen} />

        <Stack.Screen
          name='switch'
          component={SwitchScreen} />

        <Stack.Screen
          name='Loader'
          component={LoaderScreen} />

        <Stack.Screen
          name='Section'
          component={SectionListScreen} />

        <Stack.Screen
          name='Pressable'
          component={PressableScreen} />

        <Stack.Screen
          name='RefreshControl'
          component={RefreshControlScreen} />

        <Stack.Screen
          name='Appearance'
          component={AppearanceScreen} />

        <Stack.Screen
          name='DeviceInfo'
          component={DeviceInfoScreen} />

        <Stack.Screen
          name='Animation'
          component={AnimationScreen} />

        <Stack.Screen
          name='PlatformColor'
          component={PlatformColorScreen} />

      

      </Stack.Navigator>

    </NavigationContainer>

  );
}

export default App


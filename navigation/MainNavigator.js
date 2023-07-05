import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import {Text, View} from 'react-native';
import ProfilePhotosTab from '../components/ProfilePhotosTab/ProfilePhotosTab';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const ProfileTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarStyle: {elevation: 0, zIndex: 0},
      }}>
      <Tab.Screen
        name="Photos"
        component={ProfilePhotosTab}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Photos'} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={ProfilePhotosTab}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Videos'} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={ProfilePhotosTab}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Saved'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Tab1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is photos tab</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is videos tab</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is saved tab</Text>
    </View>
  );
};
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        header: () => {
          return null;
        },
      }}>
      <Stack.Screen name={'MainDrawer'} component={MainDrawer} />
    </Stack.Navigator>
  );
};
export default MainNavigator;

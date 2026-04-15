import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import AEPListScreen from '../screens/AEPListScreen';
import AEPDetailScreen from '../screens/AEPDetailScreen';
import TabBar from './TabBar';
import {AEPReport} from '../data/mock';
import {colors} from '../theme';

export type HomeStackParamList = {
  Home: undefined;
  AEPList: undefined;
  AEPDetail: {report: AEPReport};
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator();

function EmptyScreen() {
  return <View style={styles.emptyScreen} />;
}

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="AEPList" component={AEPListScreen} />
      <HomeStack.Screen name="AEPDetail" component={AEPDetailScreen} />
    </HomeStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={TabBar}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
        <Tab.Screen name="Folder" component={EmptyScreen} />
        <Tab.Screen name="Settings" component={EmptyScreen} />
        <Tab.Screen name="Profile" component={EmptyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1,
    backgroundColor: colors.grey50,
  },
});

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomeScreen } from '../screens/Home';
import { WTRScreen } from '../screens/WTR';

const Stack = createNativeStackNavigator();

export const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen component={HomeScreen} name="Home" />
                <Stack.Screen component={WTRScreen} name="WTR" />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

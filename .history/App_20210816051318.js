import React from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Screens
import Dashboard from './src/screens/authorized/Dashboard';

import { cons, COLORS, FONTS, SIZES } from './src/utilities/constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={'Dashboard'}>
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle,
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image 
                  source={icons.menu}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25
                  }}
                />
              </TouchableOpacity>
            )
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};

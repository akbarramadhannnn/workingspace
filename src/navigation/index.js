import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  HomeSreenV1,
  SignInScreenV1,
  SignUpScreenV1,
  ForgotPasswordScreenV1,
} from '@screens';
import Routes from '@routes';

const Stack = createStackNavigator();

const Index = () => {
  const optionsConfig = {
    headerShadowVisible: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.SignInScreen}
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen name={Routes.SignInScreen} component={SignInScreenV1} />
        <Stack.Screen name={Routes.SignUpScreen} component={SignUpScreenV1} />
        <Stack.Screen name={Routes.HomeScreen} component={HomeSreenV1} />
        <Stack.Screen
          name={Routes.ForgotPasswordScreen}
          component={ForgotPasswordScreenV1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

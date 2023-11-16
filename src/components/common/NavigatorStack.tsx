// import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { BottomNavigation, Snackbar } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useSnackbar } from "../../contexts/snackbarContext";

import NavigatorTabbar from "./NavigatorTabbar";
import HomeScreen from "../../screen/home";
import ProfileScreen from "../../screen/profile";
import ChallengeScreen from "../../screen/challange";

export type StackNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Challenge: undefined;
  Navigator: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

const NavigatorStack = () => {
  const { state, hideSnackbar } = useSnackbar();

  return (
    <>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ 
          headerShown: false,
          cardStyle: {
            backgroundColor: '#F9F9F9',
         },
         }}>
          <Stack.Group>
            <Stack.Screen name="Navigator" component={NavigatorTabbar} />
            <Stack.Screen name={"Home"} component={HomeScreen} />
            <Stack.Screen name={"Profile"} component={ProfileScreen} />
            <Stack.Screen name={"Challenge"} component={ChallengeScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>

      <Snackbar
        style={{ backgroundColor: state?.bgColor }}
        visible={state?.show}
        onDismiss={hideSnackbar}
        action={{
          label: "Close",
          onPress: () => {
            hideSnackbar();
          }
        }}
        duration={5000}
      >
        {state.message}
      </Snackbar>
    </>
  );
}

export default NavigatorStack;
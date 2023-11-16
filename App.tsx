// import CardPoints from '@components/CardPoints';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import NavigatorStack from "./src/components/common/NavigatorStack";
import { SnackbarContextProvider } from "./src/contexts/snackbarContext";


export default function App() {
  return (
    <>
    <SafeAreaView style={{flex: 1}}>
      <SnackbarContextProvider>
        <SafeAreaProvider>
          <NavigatorStack />
          <StatusBar style="dark" />
        </SafeAreaProvider>
      </SnackbarContextProvider>
    </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

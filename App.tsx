/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Dashboard from './src/screen/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/tabs';
import Login from './src/screen/login';
import Register from './src/screen/register';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [haveAccount, setHaveAccount] = useState(true);
  const [createAccountSuccess, setCreateAccountSuccess] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      {isSignedIn && haveAccount ? (
        <Tabs />
      ) : haveAccount ? (
        <Login setIsSignedIn={setIsSignedIn} setHaveAccount={setHaveAccount} />
      ) : (
        <Register
          setHaveAccount={setHaveAccount}
          setCreateAccountSuccess={setCreateAccountSuccess}
        />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

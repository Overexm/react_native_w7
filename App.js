import React from 'react';
import 'react-native-gesture-handler';
import {useState, useMemo} from 'react';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import {Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme} from 'react-native-paper';
import { AuthContext } from './components/context';

const App=() => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const authContext = React.useMemo(()=> ({
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme )
    },
  }), []);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#f1f1f1',
      text: '#333333',
    }
  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#000',
      text: '#f1f1f1',
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={theme}>
      <Tabs />
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}
export default App;


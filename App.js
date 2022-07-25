import AppLoadding  from 'expo-app-loading';
import { GestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import React  from 'react';
import  ShopNavigator  from './navigation/ShopNavigator';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [loaded] = useFonts({
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) return <AppLoadding/>
 
  return (
    <ShopNavigator/>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'OpenSansRegular'
  },
});
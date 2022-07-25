import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ShopNavigator } from './navigation/ShopNavigator';
import { useFonts } from 'expo-font';
import { AppLoadding } from 'expo-app-loading';


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
  },
});
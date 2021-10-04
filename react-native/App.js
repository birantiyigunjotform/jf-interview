/* 
    1. Open https://snack.expo.dev/
    2. Fetch pokemons on App startup and display them
    3. 
*/
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';

export default function App() {

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Titulo from './src/components/Titulo/';
import Principal from './src/components/Principal/';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <Principal/>
    </View>
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

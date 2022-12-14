import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import awsmobile from './src/aws-exports';

import Amplify from 'aws-amplify';

Amplify.configure(awsmobile);

import { withAuthenticator } from 'aws-amplify-react-native';



function App() {
  return (
    <View style={styles.container}>
      <Text>Você está autenticado</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

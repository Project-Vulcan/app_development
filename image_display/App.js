import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>


        <View style={styles.textBox}>
          <Text>Open up App.js to start working on your app!</Text>

          <Image
             source={require('./assets/images/bridge.jpg')}
             style={styles.imageBridge}/> 


      </View>
      
      <StatusBar style="auto" />


    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'grey',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textBox: {
    flex: 0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10

  },

  imageBridge: {
    width: 200,
    height:200, 
  }

});

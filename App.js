import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ToastAndroid} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            style={styles.button}
            title="Toast!"
            onPress={() => ToastAndroid.show('Cheers!', ToastAndroid.SHORT)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#500',
    marginBottom: 5,
  },
  button: {
    padding: 20,
    width: 500,
    flex: 1,
    flexDirection: 'column'
  },
});

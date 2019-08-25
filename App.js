import React, { Component } from 'react';
import { Button , StyleSheet, Text, View } from 'react-native';

export default class ButtonDemo extends Component {

  _onPressButton() {
    alert('You tapped a button!');
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <View style={StyleSheet.buttonContainer}>
          <Button 
            onPress = {this._onPressButton}
            title="Click me"
          />
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  }
});
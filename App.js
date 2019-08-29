import React, { Component } from 'react';
import { 
  Button ,
  StyleSheet,
   Text,
   View,
   TouchableOpacity   
  } from 'react-native';
import  RegForm from './component/regForm';

export default class ButtonDemo extends Component {

  render() {
    return (
      <View>
        <RegForm />
      </View>
      
    );
  }
} 


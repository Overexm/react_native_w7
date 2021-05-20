import * as React from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View style={ styles.centerView }>
        <Image source={require('./assets/signup.png')} style={ styles.loginImage }/>
        <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Username"/>
        <TextInput style={styles.inputText} placeholder="Email or phone"/>
        <TextInput style={styles.inputText} placeholder="Password"/>
        <TextInput style={styles.inputText} placeholder="Repeat password"/>
        </View>
        <TouchableOpacity style={ styles.btn }>
          <Text style= {{fontFamily: 'Open Sans', color: 'white', fontSize: 20, fontWeight: 700, textAlign: 'center'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text style= {{fontFamily: 'Open Sans', color: 'grey', fontSize: 16, fontWeight: 700, textAlign: 'center'}}>Do have an already account? <TouchableOpacity style={{color: '#7036B9' }}>Login</TouchableOpacity></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F1F1F1',
  },
  centerView: {
    alignItems: 'center',
  },
  inputView: {
    marginBottom: 50,
  },
  inputText: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    padding: 10,
    width:224,
    height: 46,
    marginBottom: 20,
    borderRadius: 16.36,
  },
  loginImage: {
    width: 272,
    height: 172,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: '#7036B9',
    borderRadius: 20,
    width: 151,
    height: 50,
    padding: 10,
  },
});
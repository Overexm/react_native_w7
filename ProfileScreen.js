import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useTheme } from '@react-navigation/native';

//icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-reanimated';

const ProfileScreen=({navigation})=>{
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={require('../assets/icons/user.png')} style={styles.userImage}/>
      <Text style={styles.userName}>Username</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.desc}>
    <FontAwesome name="envelope-o" size={18} color={"#7036B9"}/>
      <Text style={{fontSize:16, color:'#7036B9',}}> Email</Text>
      </View>
      <View>
        <Text style={styles.info}>user@gmail.com</Text>
      </View>

    <View style={styles.desc}>
    <Icon name="map-marker-outline" size={18} color="#7036B9"/>
      <Text style={{fontSize:16, color:'#7036B9',}}>City</Text>
      </View>
      <View>
        <Text style={styles.info}>Almaty</Text>
      </View>

    <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate("MyFav")} >
      <Image source={require('../assets/icons/heart.png')} style={{width:20, height:20, marginRight:5, tintColor: '#7036B9',}}></Image>
      <Text style={{fontSize:15, tintColor: '#3C1D62',}}>My Favorite List</Text>
      <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft: 150, tintColor: '#7036B9',}}></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.commandButton} onPress={() => navigation.navigate("Settings")} >
      <Image source={require('../assets/icons/settings.png')} style={{width:23, height:20, marginRight:5, tintColor: '#7036B9',}}></Image>
      <Text style={{fontSize:15, tintColor: '#3C1D62',}}>Settings</Text>
      <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:200, tintColor: '#7036B9',}}></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.commandButton} onPress={() => {}} >
      <Image source={require('../assets/icons/log-out.png')} style={{width:23, height:20, marginRight:5, tintColor: '#7036B9',}}></Image>
      <Text style={{fontSize:15, tintColor: '#3C1D62',}}>Log out</Text>
      <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:200, tintColor: '#7036B9',}}></Image>
    </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;


const styles=StyleSheet.create({
  container:{
    flex: 1,
    padding: 5,
    backgroundColor: '#f1f1f1',
  },
  userImage:{
    width: 170,
    height: 170,
    borderRadius: 90,
  },
  userName:{
    marginTop: 5,
    fontSize: 25,
    fontWeight: "700",
  },

  info:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 4,
    width: 330,
    marginLeft: 38,
    paddingLeft: 4,
    fontSize: 14,
    marginTop: 7,
  },
  desc:{
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    width: '90%',
    color: '#7036B9',
  },
  commandButton:{
      padding: 10,
      flexDirection: 'row',
      marginLeft: 35,
      borderRadius: 30,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      width: '68%',
  },
});
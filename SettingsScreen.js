import React from 'react';
import {useState, useContext} from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { AuthContext } from '../components/context';
import { useTheme, Text, TouchableRipple, Switch} from 'react-native-paper';



const SettingsScreen = ({navigation})=>{

    const paperTheme = useTheme();

    const { toggleTheme } = React.useContext(AuthContext);

    
    return(
        <View style={StyleSheet.container}>
            <View style={{margin: 20,}}>
                <View style={styles.box}>
                <Image source={require('../assets/icons/settings.png')} style={{width:33, height:27, marginLeft: 390,  tintColor: '#7036B9',}}/>
                    <TouchableOpacity style={styles.commandButton}>
                        <Text>Language</Text>
                        <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:200, tintColor: '#7036B9',}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commandButton}>
                        <Text>Map</Text>
                        <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:230, tintColor: '#7036B9',}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commandButton}>
                        <Text>Navigator settings</Text>
                        <Image source={require('../assets/icons/next.png')} style={{width:20, height:20, marginLeft:150, tintColor: '#7036B9',}}/>
                    </TouchableOpacity>

                    <TouchableRipple onPress={()=>{toggleTheme()}}>
                        <View style={styles.pref}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark}/>
                            </View>
                        </View>
                    </TouchableRipple>

                </View>
                
            </View>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
      },
      box:{
          backgroundColor: '#B996E4',
          padding: 15,
          marginTop: 15,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
      },
      pref:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
      },
      commandButton:{
          padding: 10,
          flexDirection: 'row',
          borderRadius: 30,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          width: '85%',
      },

});
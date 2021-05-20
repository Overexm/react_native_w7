import React from 'react';
import {View, Image, Text, Button, StyleSheet, OpaqueColorValue} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import MyFavScreen from '../screens/MyFavScreen';
import RouteScreen from '../screens/RouteScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EditScreen from '../screens/EditScreen';

const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style:{
                position: 'absolute',
                elevation: 0,
                backgroundColor: '#B996E4',
                height: 60,
                width: '100%',
            }
        }}>
            
        <Tab.Screen name="Home" 
        component={HomeScreen} options={{
            tabBarIcon:({focused}) => (
            <View>
                <Image source={require('../assets/icons/home.png')} 
                resizeMode='contain' 
                style={{
                    width:25, height:25, tintColor: focused ? '#3C1D62' : '#ffffff', opacity: 1,
                }} />
            </View>
            ),
            }} />
        <Tab.Screen name="MyFav" component={MyFavScreen} options={{
            tabBarIcon:({focused}) => (
            <View>
                <Image source={require('../assets/icons/heart.png')} 
                resizeMode='contain' 
                style={{
                    width:25, height:25, tintColor: focused ? '#3C1D62' : '#fff', opacity: 1,
                }} />
            </View>
            ),
            }}/>
        <Tab.Screen name="Route" component={RouteScreen} options={{
            tabBarIcon:({focused}) => (
            <View>
                <Image source={require('../assets/icons/route.png')} 
                resizeMode='contain' 
                style={{
                    width:25, height:25, tintColor: focused ? '#3C1D62' : '#ffffff', opacity: 1
                }} />
            </View>
            ),
            }}/>
        <Tab.Screen name="Map" component={MapScreen} options={{
            tabBarIcon:({focused}) => (
            <View>
                <Image source={require('../assets/icons/map.png')} 
                resizeMode='contain' 
                style={{
                    width:25, height:25, tintColor: focused ? '#3C1D62' : '#ffffff', opacity: 1
                }} />
            </View>
            ),
            }}/>
        <Tab.Screen
         name="Profile" 
         component={ProfileStackScreen} 
         options={{
            tabBarIcon:({focused}) => (
            <View>
                <Image source={require('../assets/icons/profile.png')} 
                resizeMode='contain' 
                style={{
                    width:25, height:25, tintColor: focused ? '#3C1D62' : '#fff', opacity: 0.9
                }} />
            </View>
            ),
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator 
    screenOptions={{
        headerStyle: {
            backgroundColor: '#B996E4',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
        },
    }}>
        <ProfileStack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
            title: '  My Profile',
            headerRight: () =>(
                <Icon.Button
                name='account-edit'
                size={30}
                backgroundColor="#B996E4"
                color="white"
                onPress={() => navigation.navigate('Edit')}
                />
            ),
        }}
        />
        <ProfileStack.Screen
        name='Edit'
        options={{
            title: 'Edit Profile'
        }}
            component={EditScreen}
        
        />
        
        <ProfileStack.Screen
        name='Settings'
        options={{
            title: 'Settings'
        }}
            component={SettingsScreen}
        
        />

        <ProfileStack.Screen
                name='MyFav'
                options={{
                    title: 'My Favorite List'
                }}
                    component={MyFavScreen}
                
                />



    </ProfileStack.Navigator>
);


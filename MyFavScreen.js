import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MyFavScreen = ({navigation})=>{
    return(
        <View style={StyleSheet.container}>
            <Text>MyFavScreen</Text>
            <Button title="Click Here" onPress={() => alert ('Button Clicked!')}/>
        </View>
    );
};

export default MyFavScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F1F1F1',
      },
});
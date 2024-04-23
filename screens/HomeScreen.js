import React from "react";
import { SafeAreaView, StyleSheet, Text,View } from "react-native";
import tw from 'twrnc';

const HomeScreen = () => {
    return(
        <SafeAreaView style = {tw}>

        <Text style={[ 
        tw,
        { 
            color: "purple",
        },
        ]}
        >
        
        I am a homescreen

        </Text>
        </SafeAreaView>
        
        
     );     
  
        

};

export default HomeScreen

const styles = StyleSheet.create({

    text: {
        color:"blue",



    },


});




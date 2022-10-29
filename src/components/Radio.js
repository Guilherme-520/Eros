import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const Radio = ({
    options = [],
    onChangeSelected,
    selected,
}) => {

   
  return (
    <Animatable.View animation={'fadeInUp'} style={ styles.Container}>
    {options.map((opt, index)=>(
        <TouchableOpacity onPress={(()=>onChangeSelected(opt, index))} style={[styles.optContainer, {borderColor: selected === index ? "#5142ab" : "#444"}]}>
            <View style={[styles.radio, {borderColor: selected === index ? "#5142ab" : "#444"}]}>
                { selected == index && <View style={styles.innerRadio}/> }
                
            </View>
            <View style={styles.containerTxt}>
                <Text style={[styles.textOpc, {color: selected === index ? "#5142ab" : "#444"}, {borderColor: selected === index ? "#5142ab" : "#444"} ]} >{opt}</Text>
                
            </View>

        </TouchableOpacity>
    ))}
       
        
      </Animatable.View>
  )
}

const styles = StyleSheet.create({
    
    Container:{
        width: "100%",
        alignItems: 'center',
        padding: 5,
        paddingTop: 20,

        
    },

    optContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        width: '90%',
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 2,
    },

    radio:{
        borderRadius: 10,
        width: 20,
        height: 20,
        borderColor: '#777',
        borderWidth: 2,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    innerRadio:{

        borderRadius: 10,
        width: 10,
        height: 10,
        backgroundColor: '#5142ab',
    }, 

    containerTxt:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },

    textOpc:{
        fontSize: 24,
        fontWeight:'400',
        margin: 5,
    },

   

   
});
export default Radio

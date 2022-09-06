import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

const inputs = (props) => {

    const [sec, setSec] = useState(props.secureTextEntry)
  return (
    <View style={ styles.Container}>
        <TextInput 
        underlineColorAndroid='transparent'
         style={styles.input}
         {...props}
         secureTextEntry={sec}
         
         >
         </TextInput>
        <FontAwesome5 style={ styles.icon } name={props.iconName} size={24} color="black" />
        {props.secureTextEntry && (
                <TouchableOpacity
                onPress={()=> setSec(!sec)}
        >
        <FontAwesome5 style={ styles.iconSec } name={sec ? "eye" : "eye-slash"} size={24} color="black" />
        </TouchableOpacity>
            )}
        
      </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection: 'row',
    },

    input:{
        width: '90%',
        flex: 1,
        paddingLeft: 40,
        paddingRight:40,
        height: 40,
        margin: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#ccc",
        fontSize:16,
        borderRadius: 8,
        marginHorizontal: 20,

    },

    icon:{
        position: 'absolute',
        right:28,
        top:18,
    },
    iconSec:{
        position: 'absolute',
        right:28,
        top:18,
    },

});
export default inputs
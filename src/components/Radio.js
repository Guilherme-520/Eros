import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

const Radio = (props) => {


    const [option, setOption] = useState('')
   
  return (
    <View style={ styles.Container}
    
    >
    {props.options.map((opt)=>(
        <TouchableOpacity onPress={(()=>props.onChangeSelected(opt))}>
            <View style={styles.radio}>
            </View>
            <Text>{opt}</Text>
        </TouchableOpacity>
    ))}
       
        
      </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'column',
    },

    radio:{
        borderRadius: '100%',
        backgroundColor: '#54ca2'
        
    },

   
});
export default Radio

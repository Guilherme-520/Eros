import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';




export default function Home() {

  
  const auth = getAuth()
const navigation = useNavigation()

function LogOut(){
    signOut(auth).then(() => {
        navigation.navigate("Welcome")
      }).catch((error) => {
        console.log(error.message)
      });
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnLogOut} onPress={LogOut}>
        <Text style={styles.txtLogOut}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',

    },

    btnLogOut:{
        backgroundColor:'#5142ab',
        alignItems:'center',
        justifyContent:"center",
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: "50%",
        borderRadius: 10,

    },

    txtLogOut:{
        fontWeight:"700",
        fontSize: 22,
        color: '#fff',
    }
})
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/inputs';
import  { AntDesign } from '@expo/vector-icons'; 

export default function SignIn() {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.navigate('Welcome')}>
      <AntDesign style={styles.iconBack}  name="left" size={26} color='white' />
      </TouchableOpacity>
     <View style={styles.header}>

     <View style={styles.image}>
        <Image
        source={require('../../assets/logo.png')}
        style={{ width: "40%"}}
        resizeMode="contain"
        />

      </View>
      <Text style={styles.txtHeader}>Entrar</Text>
      <Text style={styles.txtAny}>Digite seus dados para acessar sua conta!</Text>
     </View>
     <Animatable.View animation='fadeInUp' style={styles.Content}>
     <Input iconName={"envelope"} keyboardType='email-address' placeholder='Email' />
     <Input iconName={"lock"} secureTextEntry placeholder='Senha'/>

     <TouchableOpacity style={styles.btnSignIn}>
      <Text style={styles.txtSignIn}>
      Entrar
      </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btnSignUp} onPress={()=> navigation.navigate("SignUp")}>
      <Text style={styles.txtSignUp}>
      Não tem conta ainda? Cadastre-se!
      </Text>
     </TouchableOpacity>
     </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#3a2f78",
  },

  iconBack:{

    padding: "5%",
  },
image:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3a2f78",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "25%",
    marginBottom: '15%',
  },

  txtHeader:{
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 45,
  },

  txtAny:{
    color: "#a1a1a1",
  },

  Content:{
    flex: 2,
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: 25,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,
    
  },

  btnSignIn:{
    backgroundColor: "#5142ab",
    marginBottom: '5%',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtSignIn:{
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },

  txtSignUp:{
    color: "#a1a1a1",
    fontSize: 15,
    fontWeight: '400'
  }
})

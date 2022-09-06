import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/inputs';
import  { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';

//import { signInWithEmailAndPassword } from 'firebase/auth'
//import { initializeApp } from 'firebase/app';
//import { getFirebaseConfig } from '../../config/firebaseconfig';


export default function SignIn() {

  const [email, setEmail ] = useState("")
  const [senha, setSenha] = useState("")
  




  useEffect(()=>{

  }, [])

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
     <Input iconName={"envelope"} keyboardType='email-address' placeholder='Email' autoCapitalize="none" onChangeText={(text)=> setEmail(text)} value={email} />
     <Input secureTextEntry placeholder='Senha'autoCapitalize="none" onChangeText={(text)=>setSenha(text)} value={senha} />

     {errorLogin === true 
     ? 
     <View style={styles.alert}>
      <Foundation name="alert" size={24} color="black" />
      <Text style={styles.txtAlert}>Email ou senha invalido </Text>
     </View>
      :
       <View/> }

       {email === "" || senha === "" 
       ?
       <TouchableOpacity style={styles.btnSignIn} disabled={true} >
      <Text style={styles.txtSignIn}>
      Entrar
      </Text>
     </TouchableOpacity>
       :
       <TouchableOpacity style={styles.btnSignIn} onPress={login}>
      <Text style={styles.txtSignIn}>
      Entrar
      </Text>
     </TouchableOpacity>
      }
     

     

     

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
    color: "#fff",
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
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    borderRadius: 10,
  },


  txtSignIn:{
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },

})

//const firebaseApp = initializeApp(getFirebaseConfig())

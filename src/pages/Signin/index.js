import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/inputs';
import  { AntDesign } from '@expo/vector-icons';

import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import firebase from '../../config/firebaseconfig'



export default function SignIn() {

  const [email, setEmail ] = useState("")
  const [senha, setSenha] = useState("")
  
const auth = getAuth(firebase)

  function login(){
    signInWithEmailAndPassword( auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate("Home",{id: user.uid})
      console.log(user.uid)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message, error.code)
    });
  }


  useEffect(()=>{

  }, [])

  const navigation = useNavigation()
  return (
    
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.navigate('Welcome')}>
      <AntDesign style={styles.iconBack}  name="left" size={26} color='white' />
      </TouchableOpacity>
      <View style={styles.image}>
      <Animatable.Image
        animation="fadeInLeft"
        source={require('../../assets/Eros.png')}
        style={{ width: "30%"}}
        resizeMode="contain"
        />
      </View>
     <View style={styles.header}>
      <Text style={styles.txtAny}>Digite seus dados para acessar sua conta!</Text>
     </View>
     
     <Animatable.View animation='fadeInUp' style={styles.Content}>

      
     <Input iconName={"envelope"} keyboardType='email-address' placeholder='Email' autoCapitalize="none" onChangeText={(text)=> setEmail(text)} value={email} />
     <Input secureTextEntry placeholder='Senha'autoCapitalize="none" onChangeText={(text)=>setSenha(text)} value={senha} />


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
    marginBottom: 28,
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },


  txtAny:{
    color: "#fff",
  },

  Content:{
    flex: 4,
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
  txtOthers:{
    color: '#a1a1a1',
    marginVertical: 14,
    position: 'absolute',
  },

  containerLine:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  line:{
    backgroundColor: "#a1a1a1",
    height: 1,
    width: 80,
    justifyContent: 'center',
    marginStart: 10,
    marginEnd: 10,

  },

  containerButtons:{
    paddingHorizontal: 60,
    flexDirection:'row',
    alignItems: 'center',
  },

  buttons:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: "100%",
  },

  
})


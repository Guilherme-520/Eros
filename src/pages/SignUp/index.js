import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/inputs';
import  { AntDesign } from '@expo/vector-icons'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { enableExpoCliLogging } from 'expo/build/logs/Logs';
//import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../../config/firebaseconfig';

export default function SignUp() {

  const [email, SetEmail ] = useState("")
  const [senha, setSenha ] = useState("")

  
  const auth = getAuth();
  async function register(){
    await createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("usuario criado com sucesso")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode)
      // ..
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
     <View style={styles.header}>
      <Text style={styles.txtHeader}>Cadastre-se</Text>
      <Text style={styles.txtAny}>Crie sua conta e comece hoje sua mudança!</Text>
     </View>
     <Animatable.View animation='fadeInUp' style={styles.Content}>
     <Input iconName={"envelope"} keyboardType="email-address" placeholder="Email" autoCapitalize='none' onChangeText={(text)=>SetEmail(text)} value={email} />
     <Input secureTextEntry placeholder="Senha" autoCapitalize='none' autoCorrect={false} onChangeText={(text)=>setSenha(text)} value={senha} />

     {email === "" || senha === "" 
     ?
     <View style={styles.btn}>
     <TouchableOpacity style={styles.btnSignUp} disabled={true} >
      <Text style={styles.txtSignUp}>
      Cadastrar
      </Text>
     </TouchableOpacity>
     </View>
     :
     <View style={styles.btn}>
     <TouchableOpacity style={styles.btnSignUp} disabled={false} onPress={register}>
      <Text style={styles.txtSignUp}>
      Cadastrar
      </Text>
     </TouchableOpacity>
     </View>
    
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

  header:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "25%",
    marginBottom: '5%',
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

  btn:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: "5%",
  
  },

  btnSignUp:{
    backgroundColor: "#5142ab",
    marginBottom: '5%',
    paddingHorizontal: 15,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
  },

  txtSignUp:{
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold'
  },

})

const firebaseApp = initializeApp(getFirebaseConfig())

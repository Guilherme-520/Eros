import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import Input from '../../components/inputs';
import  { AntDesign } from '@expo/vector-icons'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from '../../config/firebaseconfig';

export default function SignUp() {

  const [email, SetEmail ] = useState("")
  const [senha, setSenha ] = useState("")

  const auth = getAuth(firebase)
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
      <View style={styles.image}>
      <Animatable.Image
        animation="fadeInLeft"
        source={require('../../assets/Eros.png')}
        style={{ width: "30%"}}
        resizeMode="contain"
        />
      </View>
      </TouchableOpacity>
     <View style={styles.header}>
      <Text style={styles.txtAny}>Crie sua conta e comece hoje sua mudança!</Text>
     </View>
     <Animatable.View animation='fadeInUp' style={styles.Content}>
     <Input iconName={"envelope"} keyboardType="email-address" placeholder="Email" autoCapitalize='none' onChangeText={(text)=>SetEmail(text)} value={email} />
     <Input secureTextEntry placeholder="Senha" autoCapitalize='none' autoCorrect={false} onChangeText={(text)=>setSenha(text)} value={senha} />
    {
      email === "" || senha === "" 
      ?
    
      <TouchableOpacity style={styles.btnSignUp} disabled={true} >
       <Text style={styles.txtSignUp}>
       Cadastrar
       </Text>
      </TouchableOpacity>
      
      :
      
      <TouchableOpacity style={styles.btnSignUp} disabled={false} onPress={register}>
       <Text style={styles.txtSignUp}>
       Cadastrar
       </Text>
      </TouchableOpacity>
      
    }
    <View style={styles.containerLine}>
    <View style={styles.line}>
    </View>
    <Text style={styles.textOthers}>Ou criei uma conta com</Text>
    <View style={styles.line}></View>
    </View>
    <View style={styles.buttons}>
    <TouchableOpacity style={styles.googleButtom}  >
      <View style={styles.containerButtons}>
      <Image 
      style={styles.googleImg}
      resizeMode="contain"
      source={require("../../assets/google-icon.png")}
      />
      <View style={styles.bar}></View>
      <Text style={styles.googleTxt}>Google</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.facebookButtom}>
    <View style={styles.containerButtons}>
      <Image 
      style={styles.facebookImg}
      resizeMode="contain"
      source={require("../../assets/facebook.png")}
      />
       <View style={styles.bar}></View>
      <Text style={styles.facebookTxt}>Facebook</Text>
    </View>
    </TouchableOpacity>
    </View>
  
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
    marginTop: "10%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3a2f78",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    marginBottom: 60,
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
    flex: 2,
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: 25,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,
    
  },

  

  btnSignUp:{
    backgroundColor: "#5142ab",
    marginBottom: '5%',
    marginTop: "5%",
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

  googleButtom:{
    
    borderColor: "black",
    borderWidth: 2,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 15,
    marginVertical: 15,
  },
  facebookButtom:{
    backgroundColor: "#3B5998",
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 15,
  },

  bar:{
    backgroundColor: "#a1a1a1",
    height: "100%",
    width: 1,
    marginHorizontal: 5,
  },
  facebookTxt:{
    color: "#fff",
    fontWeight: '500',
    fontSize: 20,
  },
  googleTxt:{
    color: "black",
    fontWeight: '500',
    fontSize: 20,
  },
  
  googleImg:{
    position: 'absolute',
    right: 40,
    height: "100%",
  },
  facebookImg:{
    position: 'absolute',
    right: 40,
    height: 45,
  },

})


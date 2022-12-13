import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native'

export default function Welcome() {

  const auth = getAuth();
  const navigation = useNavigation();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigation.navigate('Home', {id: uid})
        // ...
      } else {
        return
      }
    });
  },[])
  return (
    <Animatable.View animation="fadeInDown" style={styles.container}>
      
      <View style={styles.image}>
        <Animatable.Image
        animation="flipInY"
        source={require('../../assets/Eros.png')}
        style={{ width: "60%"}}
        resizeMode="contain"
        />

      </View>
      <Animatable.View animation="fadeInUp" delay={600} style={styles.options}>
        <TouchableOpacity onPress={ () => navigation.navigate('SignIn') } style={styles.btnSignIn}>
          <Text style={styles.txtSignIn}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSignUp} onPress={()=> navigation.navigate("SignUp")}>
          <Text style={styles.txtSignUp}>Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </Animatable.View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    width: "100%"
  },

  image:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#3a2f78",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  
  options:{
    flex: 1,
    backgroundColor: '#fff',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnSignIn:{
    backgroundColor: "#5142ab",
    marginBottom: '5%',
    borderRadius: 10,
    width: '55%',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtSignIn:{
    color: "#fff",
    fontSize: 25,
    fontWeight: '600'
  },

  txtSignUp:{
    fontSize: 25,
    fontWeight: '600'
  }
})
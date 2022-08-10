import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';
import { useNavigation} from '@react-navigation/native'

export default function Welcome() {

  const navigation = useNavigation();
  return (
    <Animatable.View animation="fadeInDown" style={styles.container}>
      
      <View style={styles.image}>
        <Animatable.Image
        animation="flipInY"
        source={require('../../assets/logo.png')}
        style={{ width: "40%"}}
        resizeMode="contain"
        />
      </View>
      <Animatable.View animation="fadeInUp" delay={600} style={styles.options}>
        <TouchableOpacity onPress={ () => navigation.navigate('SignIn') } style={styles.btnLogin}>
          <Text style={styles.txtLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSignIn}>
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

  btnLogin:{
    backgroundColor: "#3a2f78",
    marginBottom: '5%',
    borderRadius: 20,
    width: '55%',
    height: '18%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtLogin:{
    color: "#fff",
    fontSize: 25,
    fontWeight: '600'
  },

  txtSignUp:{
    fontSize: 25,
    fontWeight: '600'
  }
})
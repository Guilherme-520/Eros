import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.txtHeader}>Entrar</Text>
      <Text style={styles.txtAny}>Digite seus dados para acessar sua conta!</Text>
     </View>
     <Animatable.View animation='fadeInUp' style={styles.Content}>
      <Text style={styles.txtInput}>Email:</Text>
      <TextInput style={styles.input}
      placeholder='seu@email.com.br'
      />

      <Text style={ styles.txtInput}>Senha:</Text>
      <TextInput style={styles.input}
      placeholder="********"/>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={ styles.txtLogin }>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={ styles.btnSignIn }>
        <Text style={ styles.txtSignIn }>Não Possui uma conta? Cadastre-se</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: 25,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    padding: 10,
    
  },

  input:{
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#a1a1a1',
    borderRadius: 25,
    paddingVertical: '2%',
  },

  txtInput:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
})

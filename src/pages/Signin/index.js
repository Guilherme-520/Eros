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
     <View style={styles.Content}>
      <Text style={styles.txtInput}>Email:</Text>
      <TextInput styles={styles.input}
      placeholder='seu@email.com.br'
      />

      <Text style={ styles.txtInput}>Senha:</Text>
      <TextInput style={styles.input}
      placeholder="********"
      />
     </View>
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
    
  },

  txtInput:{
    alignSelf: 'center',
  }
})

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput  } from 'react-native';
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {updateDoc, collection, getFirestore} from 'firebase/firestore';
import firebase from '../../config/firebaseconfig';
import { getAuth, signOut } from 'firebase/auth';

export default function Profile({route}) {




  const navigation = useNavigation()
  const auth = getAuth(firebase)
  const db = getFirestore(firebase);

  function LogOut(){
    signOut(auth).then(() => {
        navigation.navigate("Welcome")
      }).catch((error) => {
        console.log(error.message)
      });
}

  return (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={ () => navigation.goBack()}>
            <AntDesign style={styles.iconBack}  name="left" size={26} color='white' />
            </TouchableOpacity>
            <View style={styles.pageTitle}>
                <Text style={styles.title}>Perfil</Text>
            </View>
        </View>
        <View style={styles.content}>
            <TextInput></TextInput>
        </View>
        <View style={styles.exitContent}>
            <TouchableOpacity style={styles.btnExit}>
                <Text style={styles.txtExit}>Sair</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Save}>
            <TouchableOpacity style={styles.btnSave}><Text style={styles.txtSave}>Salvar</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
},
header:{
    flexDirection: 'row',
    width:'100%',
    backgroundColor: '#3a2f78',
    alignItems: 'center',
    justifyContent: 'flex-start',
},

pageTitle:{
    width:'100%',
    backgroundColor: '#3a2f78',
    paddingLeft: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 10,

},

title:{
    color: '#fff',
    fontSize: 30,
},

Save:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
},

btnSave:{
    width: '90%',
    backgroundColor: '#5142ab',
    borderRadius: 10,
},

txtSave:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 28,
},

})
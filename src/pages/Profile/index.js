import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { updateDoc, collection, getFirestore, doc, onSnapshot  } from "firebase/firestore";
import firebase from "../../config/firebaseconfig";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export default function Profile({route}) {
  const navigation = useNavigation();
  const auth = getAuth(firebase);
  const db = getFirestore(firebase);
  const id = route.params.id
  console.log(id);
  const [nome, setNome] = useState("Guilherme");
  const [hair, setHair] = useState("Ondulado");
  const [skin, setSkin] = useState("Mista");
  const [problemHair, setProblemHair] = useState("Não tão danificado");
  const [problemSkin, setProblemSkin] = useState("Manutenção");

  function LogOut() {
    signOut(auth)
      .then(() => {
        navigation.navigate("Welcome");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function save(){
    alert('Dados alterados com sucesso')
  }

 useEffect(()=>{

    
 })
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconBack}
            name="left"
            size={26}
            color="white"
          />
        </TouchableOpacity>
        <View style={styles.pageTitle}>
          <Text style={styles.title}>Perfil</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.icon}>
          <FontAwesome5 name="user-circle" size={150} color="white" />
        </View>
        <ScrollView style={styles.containerInfos}>
          <View style={styles.info}>
            <Text style={styles.labels}>Nome:</Text>
            <TextInput value={nome} style={styles.inputs} onChangeText={(text)=>setNome(text)}/>
            <Text style={styles.labels}>Cabelo:</Text>
            <TextInput value={hair} style={styles.inputs} onChange={(text)=>setHair(text)}/>
            <Text style={styles.labels}>Dano capilar:</Text>
            <TextInput value={problemHair} style={styles.inputs} onChange={(text)=>setProblemHair(text)}/>
            <Text style={styles.labels}>Pele:</Text>
            <TextInput value={skin} style={styles.inputs} onChange={(text)=>setSkin(text)}/>
            <Text style={styles.labels}>Problema da Pele:</Text>
            <TextInput value={problemSkin} style={styles.inputs} onChange={(text)=>setProblemSkin(text)}/>
            <View style={styles.btns}>
              <TouchableOpacity style={styles.btnExit} onPress={LogOut}>
                <Text style={styles.txtExit}>Sair</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSave} onPress={save}>
                <Text style={styles.txtSave}>
                    Salvar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3a2f78",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#3a2f78",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  pageTitle: {
    width: "100%",
    backgroundColor: "#3a2f78",
    paddingLeft: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 10,
  },

  title: {
    color: "#fff",
    fontSize: 30,
  },

  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  labels: {
    fontSize: 22,
    marginLeft: 10,
  },

  inputs: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    width: "90%",
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 8,
    fontSize: 22,
  },

  containerChange:{
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingTop: 25,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 10,
  },

  containerInfos: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  infos: {
    marginLeft: 5,
    width: "100%",
    height: "100%",
  },

  btns:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },

  btnExit: {
    borderWidth: 1,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderRadius: 8,
    marginTop: 20,
  },

  txtExit: {
    color: "red",
    fontSize: 22,
  },

  btnSave:{
    borderWidth: 1,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5142ab",
    borderRadius: 8,
    marginTop: 20,
  },

  txtSave:{
    color: "#5142ab",
    fontSize: 22,
  },
})

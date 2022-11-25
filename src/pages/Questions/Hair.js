import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView  } from 'react-native';
import React,{useState} from 'react';
import Radio from '../../components/Radio';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import firebase from '../../config/firebaseconfig';

export default function Hair() {



  const [selected, setSelected ] = useState(null)
  const [hair, setHair ] = useState("")

  const navigation = useNavigation()

  const db = getFirestore(firebase);

  

  function next(){

    classHair();
    if(hair === "Liso"){
      navigation.navigate("Liso")
    }else if(hair === "Ondulado"){
      navigation.navigate("Ondulado")
    }
    else if(hair === "Cacheado"){
      navigation.navigate("Cacheado")
    }
    else if(hair === "Crespo"){
      navigation.navigate("Crespo")
    }
  }

  async function classHair(){
     await addDoc(collection(db, 'infoHair'),{
      Classificacao: hair
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Qual seu tipo de cabelo?</Text>
      </View>
      <View styles={styles.content}>  
        <Radio 
        selected={selected}
        options={['Liso', 'Ondulado', 'Cacheado', 'Crespo']} 
        onChangeSelected={(opt, index) =>
          {
            setSelected(index);
            setHair(opt);
          
          }}
          />
      </View>
      <View style={styles.btns}>
        
        <TouchableOpacity onPress={()=>{}} style={styles.btnPrevius}><AntDesign name="arrowleft" size={70} color="white" /></TouchableOpacity> 
        <TouchableOpacity onPress={next} style={styles.btnNext}><AntDesign name="arrowright" size={70} color="white" /></TouchableOpacity> 

      </View>
     
      
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    
  },

  txtBack:{

    width: '100%',
    backgroundColor: "#3a2f78",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    
  },
  
  Question:{
    fontSize: 34,
    color: '#fff',
    marginTop: 20,
    marginBottom: 25,
    marginLeft: 25,
  },

  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },

  btns:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },

  btnNext:{
    backgroundColor: '#5142ab',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
    padding: 5,
    borderRadius: 100,
    
  },
  btnPrevius:{
    backgroundColor: '#5142ab',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
    padding: 5,
    borderRadius: 100,
    
  },

})
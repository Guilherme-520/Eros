import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView  } from 'react-native';
import React,{useState} from 'react';
import Radio from '../../components/Radio';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {setDoc, collection, doc, getFirestore} from 'firebase/firestore';
import firebase from '../../config/firebaseconfig';

export default function ProblemSkin({route}) {



  const [selected, setSelected ] = useState(null)
  const [problem, setProblem ] = useState("")
  const hair = route.params.cabelo;
  const type = route.params.fio;
  const problemHair = route.params.problemHair;
  const skin = route.params.pele;
  const day = new Date
  const month = new Date
  const id = route.params.id
  console.log(id)



  const navigation = useNavigation()

  const db = getFirestore(firebase);

  async function createData(){
    console.log(id)
    await setDoc(doc(db, "Info", id),{
     Cabelo: hair,
     Fio: type,
     ProblemaCabelo: problemHair,
     Pele: skin,
     ProblemaPele: problem,
     day: day.getDate(),
     Month: month.getMonth(),
   });
   navigation.navigate("Home", {id: id})
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Qual problema com sua pele?</Text>
      </View>
      <View styles={styles.content}>  
        <Radio
        selected={selected}
        options={['Cravos', 'Espinhas', 'Manutenção', 'Contole de oleosidade']} 
        onChangeSelected={(opt, index) =>
          {
            setSelected(index);
            setProblem(opt);
          
          }}
          />
      </View>
      <View style={styles.btns}>
        
        <TouchableOpacity onPress={()=>navigation.navigate("Skins")} style={styles.btnPrevius}><AntDesign name="arrowleft" size={70} color="white" /></TouchableOpacity> 
        <TouchableOpacity onPress={createData} style={styles.btnNext}><AntDesign name="arrowright" size={70} color="white" /></TouchableOpacity> 

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
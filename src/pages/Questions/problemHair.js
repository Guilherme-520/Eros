import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView  } from 'react-native';
import React,{useState} from 'react';
import Radio from '../../components/Radio';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function ProblemHair({route}) {



  const [selected, setSelected ] = useState(null)
  const [problem, setProblem ] = useState("")
  const hair = route.params.cabelo;
  const type = route.params.fio;
  const id = route.params.id

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Qual o estado do seu cabelo?</Text>
      </View>
      <View styles={styles.content}>  
        <Radio
        selected={selected}
        options={['Saudável', 'Não tão danificado', 'Muito Danificado']} 
        onChangeSelected={(opt, index) =>
          {
            setSelected(index);
            setProblem(opt);
          
          }}
          />
      </View>
      <View style={styles.btns}>
        
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.btnPrevius}><AntDesign name="arrowleft" size={70} color="white" /></TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.navigate("Skins", {cabelo: hair, fio: type, problemHair: problem , id: id})} style={styles.btnNext}><AntDesign name="arrowright" size={70} color="white" /></TouchableOpacity> 

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
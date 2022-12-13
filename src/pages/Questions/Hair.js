import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView  } from 'react-native';
import React,{useState} from 'react';
import Radio from '../../components/Radio';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Hair({route}) {



  const [selected, setSelected ] = useState(null)
  const [hair, setHair ] = useState("")

  const navigation = useNavigation()
  const id = route.params.id

  

  function next(){
    console.log(id)
    if(hair === "Liso"){
      navigation.navigate("Liso", {cabelo: hair, id: id})
    }
     else if(hair === "Ondulado"){
      navigation.navigate("Ondulado", {cabelo: hair, id: id})
    }
    else if(hair === "Cacheado"){
      navigation.navigate("Cacheado", {cabelo: hair, id: id})
    }
    else if(hair === "Crespo"){
      navigation.navigate("Crespo", {cabelo: hair, id: id})
    }
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
            setHair(opt)
            setSelected(index);
          
          }}
          />
      </View>
      <View style={styles.btns}>
        
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
    justifyContent: 'flex-end',
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

})
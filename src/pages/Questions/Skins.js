import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import React,{useState} from 'react';
import Radio from '../../components/Radio';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Skins(){

    const [selected, setSelected ] = useState(null)
    const [skin, setSkin ] = useState("")

  const navigation = useNavigation()
    return(
        <View style={styles.container}>
      <StatusBar backgroundColor="#3a2f78" barStyle="light-content"/>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Qual seu tipo de Pele?</Text>
      </View>
      <View styles={styles.content}>  
        <Radio 
        selected={selected}
        options={['Seca', 'Oliosa', 'Mista']} 
        onChangeSelected={(opt, index) =>
          {
            setSelected(index);
            setSkin(opt);
          
          }}
          />
      </View>
      
      <View style={styles.btns}>
        
        <TouchableOpacity onPress={()=>navigation.navigate("Hair")} style={styles.btnPrevius}><AntDesign name="arrowleft" size={70} color="white" /></TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.navigate("Skins")} style={styles.btnNext}><AntDesign name="arrowright" size={70} color="white" /></TouchableOpacity> 

      </View>

    </View>
    )
}

const styles = StyleSheet.create({

    container:{
    
    },
  
    txtBack:{
  
      width: '100%',
      backgroundColor: "#3a2f78",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      
    },
    
    Question:{
      fontSize: 30,
      color: '#fff',
      marginTop: 25,
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
        padding: 5,
        borderRadius: 100,
        
      },
      btnPrevius:{
        backgroundColor: '#5142ab',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 100,
        
      },
  
  })
import { View, Text,TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { FontAwesome5 } from '@expo/vector-icons';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import firebase from '../../config/firebaseconfig';




export default function CalendarSkin({route}) {

  
const navigation = useNavigation()
const tratamentos = {
  saudavel: ['Limpeza', 'Esfoliação', 'Mascara', 'Hidratação', 'Proteção', ],

}

const [problemSkin, setProblemSkin] = useState("");
const [skin, setSkin] = useState("Mista");

const db = getFirestore(firebase)
const id = route.params.id
console.log(db)




function tratamento(trata){
  console.log(trata)
   if( trata == "Limpeza") {
    navigation.navigate('Limpeza');
  } else if (trata == "Hidratação") {
    navigation.navigate('HidratacaoPele');
  } else if( trata == "Esfoliação") {
    navigation.navigate('Esfoliacao');
  } else if( trata == "Mascara" && skin == "Normal") {
    navigation.navigate('MascaraNormais');
  } else if( trata == "Mascara" && skin == "Mista") {
    navigation.navigate('MascaraNormais');
  } else if( trata == "Mascara" && skin == "Seca") {
    navigation.navigate('MascaraSecas');
  } else if( trata == "Mascara" && skin == "Oleosa") {
    navigation.navigate('MascaraOleosas');
  } else if (trata == "Proteção" && skin == "Mista") {
    navigation.navigate("ProtecaoMistas")
  } else if (trata == "Proteção" && skin == "Seca") {
    navigation.navigate("ProtecaoSecas")
  } else if (trata == "Proteção" && skin == "Oleosa") {
    navigation.navigate("ProtecaoOleosas")
  } else if (trata == "Proteção" && skin == "Normal") {
    navigation.navigate('ProtecaoNormais');
  }
}
LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abri', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';


useEffect(()=>{
  
}, [])
  return (
    
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={styles.infoTop}>
          <Text style={styles.txtPage}>SkinCare</Text>
          <TouchableOpacity style={styles.btnAccount} onPress={()=>navigation.navigate('Profile',{id: id})}><FontAwesome5 name="user-circle" size={35} color="white" /></TouchableOpacity>
        </View>
        <View style={styles.btnTrata}>
          <TouchableOpacity style={styles.btnHair} onPress={()=>navigation.navigate("Home", {id: id})}><Text style={styles.txtBtnHair}>Cabelo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnSkin} onPress={()=>navigation.navigate("CalendarSkin", {id: id})}><Text style={styles.txtBtnSkin}>Pele</Text></TouchableOpacity>

        </View>

      </View>
      <Calendar 
      style={styles.calendar}
      markedDates={{
       '2022-12-12' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-13' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-14' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-15' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-16' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-17' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-18' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-19' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-20' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-21' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-22' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-23' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-24' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-25' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-26' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-27' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-28' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-29' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-30' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-31' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-01' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-02' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-03' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-04' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-05' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-06' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-07' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-08' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-09' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-10' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-11' : {selected: true, selectedColor: '#5142ab'},
      }}
      />
    
          <ScrollView style={styles.days}>
            <View>
              <View>
                 <Text style={styles.txtSkin}>Os tratamentos de skincare devem ser feitos diariamente</Text>
              </View>
              { tratamentos.saudavel.map((trata)=>
              <View style={styles.contentTratamento}>
                <TouchableOpacity style={styles.content} onPress={()=>tratamento(trata)}>
                <Text style={styles.tratamento}>{trata}</Text>
              </TouchableOpacity>
              </View>
              )}

            </View>
          </ScrollView>
       
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        padding: 0,
        margin: 0,
        flex: 1,


    },

    Top:{
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#3a2f78',
      width: '100%',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },

    infoTop:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },

    txtPage:{
      color: '#fff',
      fontSize: 25,
    },

    btnAccount:{
      margin: 8,
      marginLeft: '50%',
    },

    btnTrata:{
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    btnHair:{
      marginBottom: 5,

    },

    btnSkin:{
      marginLeft: 10,
      marginBottom: 5,
    },

    txtBtnHair:{
      color: "#fff",
      fontSize: 25,
    },
    txtBtnSkin:{
      color: "#fff",
      fontSize: 25,
    },
    txtSkin:{
      color: "black",
      fontSize: 25,
      marginLeft: 10,
      textAlign: 'center',
    },

    days:{
    marginBottom: 15,
    },
  

    calendar:{
      width: 350,
      borderRadius: 10,
    },


    content:{
      marginTop: 10,
      marginLeft: 5,
      marginRight: 10,
      marginBottom: 5,
      width: '100%',
      backgroundColor: '#5142ab'
    },

    contentTratamento:{
      flex: 1,
      alignItems: 'center',
      width: "100%",
    },



    tratamento:{
      fontSize: 35,
      fontWeight: 'bold',
      marginLeft: 15,
      color: 'white',
      textAlign: 'center',
    },


})
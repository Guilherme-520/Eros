import { View, Text,TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';




export default function CalendarSkin() {

  
  const auth = getAuth()
const navigation = useNavigation()
const tratamentos = {
  saudavel: ['Limpeza', 'Tônico', 'Hidratação', 'Esfoliação', 'Creme' ],
  danificado: ['Hidratação', 'Nutrição', 'Hidratação', 'Hidtatação', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Hidratação', 'Nutrição', 'Reconstrução'],
  destruido: ['Hidratação', 'Nutrição', 'Reconstrução', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Reconstrução', 'Hidratação', 'Hidratação', 'Nutrição'],

}

const [problemSkin, setProblemSkin] = useState("");
const [Skin, setSkin] = useState("");



function LogOut(){
    signOut(auth).then(() => {
        navigation.navigate("Welcome")
      }).catch((error) => {
        console.log(error.message)
      });
}


function tratamento(trata){
  if (trata == "Hidratação" && problemHair == 'Muito danificado') {
    navigation.navigate('Hidratacao');
  } else if( trata == "Hidratação" && cabelo == "Liso") {
    navigation.navigate('HidratacaoLiso');
  } else if( trata == "Hidratação" && cabelo == "Ondulado") {
    navigation.navigate('HidratacaoOndulado');
  } else if( trata == "Hidratação" && cabelo == "Cacheado") {
    navigation.navigate('HidratacaoCacheado');
  } else if( trata == "Hidratação" && cabelo == "Crespo") {
    navigation.navigate('HidratacaoCrespo');
  } else if( trata == "Reconstrução") {
    navigation.navigate('Reconstrucao');
  } else if (trata == "Nutrição") {
    navigation.navigate("Nutricao")
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
  return (
    
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={styles.infoTop}>
          <Text style={styles.txtPage}>SkinCare</Text>
          <TouchableOpacity style={styles.btnAccount} onPress={()=>navigation.navigate('Profile')}><FontAwesome5 name="user-circle" size={35} color="white" /></TouchableOpacity>
        </View>
        <View style={styles.btnTrata}>
          <TouchableOpacity style={styles.btnHair} onPress={()=>navigation.navigate("Home")}><Text style={styles.txtBtnHair}>Cabelo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnSkin} onPress={()=>navigation.navigate("CalendarSkin")}><Text style={styles.txtBtnSkin}>Pele</Text></TouchableOpacity>

        </View>

      </View>
      <Calendar 
      style={styles.calendar}
      markedDates={{
       '2022-12-09' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-10' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-11' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-12' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-13' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-14' : {selected: true, selectedColor: '#5142ab'},
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
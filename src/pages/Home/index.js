import { View, Text,TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';




export default function Home() {

  
  
const navigation = useNavigation()
const tratamentos = {
  saudavel: ['Hidratação', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Hidratação', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Reconstrução'],
  danificado: ['Hidratação', 'Nutrição', 'Hidratação', 'Hidtatação', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Hidratação', 'Nutrição', 'Reconstrução'],
  destruido: ['Hidratação', 'Nutrição', 'Reconstrução', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Reconstrução', 'Hidratação', 'Hidratação', 'Nutrição'],

}

const [problemHair, setProblemHair] = useState("");
const [cabelo, setcabelo] = useState("Ondulado");
const day = 3
const fim = 30
const total = []





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

function days() {

  for (let index = day; index < fim; index++) {
    
     total = [index]
  }
  console.log(total)
  
}




return (
  
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={styles.infoTop}>
          <Text style={styles.txtPage}>Cronograma Capilar</Text>
          <TouchableOpacity style={styles.btnAccount} onPress={()=>navigation.navigate('Profile')}><FontAwesome5 name="user-circle" size={35} color="white" /></TouchableOpacity>
        </View>
        <View style={styles.btnTrata}>
          <TouchableOpacity style={styles.btnHair} onPress={()=>navigation.navigate("Home")}><Text style={styles.txtBtnHair}>Cabelo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnSkin}  onPress={()=>navigation.navigate("CalendarSkin")}><Text style={styles.txtBtnSkin}>Pele</Text></TouchableOpacity>

        </View>

      </View>
      <Calendar 
      style={styles.calendar}
      markedDates={{
       '2022-12-01' : {selected: true, selectedColor: '#5142ab'}
      }}
      />
      <SafeAreaView style={styles.days}>
        
          <ScrollView>
            <View>

              

              { tratamentos.saudavel.map((trata)=>
              <View>
                <TouchableOpacity style={styles.content} onPress={()=>tratamento(trata)}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>1</Text>
                    {console.log(total)}
                  </View>
                
                <Text style={styles.tratamento}>{trata}</Text>
              </TouchableOpacity>
              </View>
              )}

            </View>
          </ScrollView>
    
        </SafeAreaView>
       
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
      marginBottom: 13,
    },

    txtPage:{
      color: '#fff',
      fontSize: 25,
    },

    btnAccount:{
      margin: 8,
      marginLeft: '20%',
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

    
    contentStart:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    calendar:{
      width: 350,
      borderRadius: 10,
    },

    listContent:{
      flex: 1,
    },

    days:{
      flex: 1,
      borderTopColor: '#c4c4c4',
      borderTopWidth: 3,
      width: "100%",
    },

    content:{
      flexDirection: 'row',
      borderColor: '#c4c4c4',
      borderWidth: 2,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 10,
    },

    markDay:{
      backgroundColor: '#5142ab',
      height: "100%",
      width: "15%",
      paddingRight: 5,
      textAlign: 'center',
      borderColor: '#c4c4c4',
      borderWidth: 1,

    },

    txtDay:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 35,
      textAlign: 'center'
    },

    tratamento:{
      fontSize: 35,
      fontWeight: 'bold',
      marginLeft: 15,
    },


    btnStart:{
        backgroundColor:'#5142ab',
        alignItems:'center',
        justifyContent:"center",
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: "50%",
        borderRadius: 10,

    },

    txtStart:{
        fontWeight:"700",
        fontSize: 22,
        color: '#fff',
    }
})
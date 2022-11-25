import { View, Text,TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';




export default function Home() {

  
  const auth = getAuth()
const navigation = useNavigation()
const [startc, setStart] = useState(false)

function LogOut(){
    signOut(auth).then(() => {
        navigation.navigate("Welcome")
      }).catch((error) => {
        console.log(error.message)
      });
}

function start(){
    setStart(true)

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
  monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abri', 'Mai.', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';
  return (
    <View style={styles.container}>
      <View><Text>Bem Vindo user</Text></View>
      <Calendar style={styles.calendar}></Calendar>
      <View style={styles.days}>
        <ScrollView style={{width: '100%'}}>


            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>12</Text>
              </View>
              <Text style={styles.tratamento}>Hidratação</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>14</Text>
              </View>
              <Text style={styles.tratamento}>Nutrição</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>16</Text>
              </View>
              <Text style={styles.tratamento}>Hidratação</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>18</Text>
              </View>
              <Text style={styles.tratamento}>Nutrição</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>20</Text>
              </View>
              <Text style={styles.tratamento}>Reconstrução</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>22</Text>
              </View>
              <Text style={styles.tratamento}>Hidratação</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>22</Text>
              </View>
              <Text style={styles.tratamento}>Hidratação</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>22</Text>
              </View>
              <Text style={styles.tratamento}>Hidratação</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.markDay}>
                <Text style={styles.txtDay}>22</Text>
              </View>
              <Text style={styles.tratamento}>Hidratação</Text>
            </View>

        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        padding: 0,
        margin: 0,


    },

    calendar:{
      width: 350,
    },

    days:{
      borderTopColor: '000',
      borderTopWidth: 3,
      width: "100%",
    },

    content:{
      flexDirection: 'row',
      width: '100%',
      borderColor: '#000',
      borderWidth: 2,
      marginTop: 10,
    },

    markDay:{
      backgroundColor: '#5142ab',
      height: "100%",
      paddingRight: 5,
      textAlign: 'center',
      borderRightColor: '#000',
      borderWidth: 2,

    },

    txtDay:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 35,
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
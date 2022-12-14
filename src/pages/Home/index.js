import { View, Text,TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';




export default function Home({route}) {

  
  
const navigation = useNavigation()
const tratamentos = {
  saudavel: ['Hidratação', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Hidratação', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Reconstrução'],
  danificado: ['Hidratação', 'Nutrição', 'Hidratação', 'Hidtatação', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Hidratação', 'Nutrição', 'Reconstrução'],
  destruido: ['Hidratação', 'Nutrição', 'Reconstrução', 'Nutrição', 'Hidratação', 'Nutrição', 'Hidratação', 'Nutrição', 'Reconstrução', 'Hidratação', 'Hidratação', 'Nutrição'],

}

const [cabelo, setcabelo] = useState("Ondulado");
const [day, setDay] = useState(1);
const dano = "Não muito danificado";
const fim = 30;
const total = ['12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '01', '03'];
const id = route.params.id;
console.log(route.params.id)





useEffect((()=>{
}), [])

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
          <Text style={styles.txtPage}>Cronograma Capilar</Text>
          <TouchableOpacity style={styles.btnAccount} onPress={()=>navigation.navigate('Profile', {id: id})}><FontAwesome5 name="user-circle" size={35} color="white" /></TouchableOpacity>
        </View>
        <View style={styles.btnTrata}>
          <TouchableOpacity style={styles.btnHair} onPress={()=>navigation.navigate("Home")}><Text style={styles.txtBtnHair}>Cabelo</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnSkin}  onPress={()=>navigation.navigate("CalendarSkin", {id: id})}><Text style={styles.txtBtnSkin}>Pele</Text></TouchableOpacity>

        </View>

      </View>
      <View style={styles.containerCalendar}>
      <Calendar 
      style={styles.calendar}
      markedDates={{
       '2022-12-12' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-14' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-16' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-18' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-20' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-22' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-24' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-26' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-28' : {selected: true, selectedColor: '#5142ab'},
       '2022-12-30' : {selected: true, selectedColor: '#5142ab'},
       '2022-01-01' : {selected: true, selectedColor: '#5142ab'},
       '2023-01-03' : {selected: true, selectedColor: '#5142ab'},
      }}
      />
      </View>
      
      <SafeAreaView style={styles.days}>
        
          <ScrollView>
            <View>

              {dano == "Saudavel" && 
              <View>
                <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[0])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[0]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[1])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[1]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[2])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[2]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[2]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[3])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[3]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[3]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[4])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[4]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[4]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[5])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[5]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[5]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[6])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[6]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[6]}</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[7])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[7]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[7]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[8])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[8]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[8]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[9])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[9]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[9]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[10])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[10]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[10]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.saudavel[11])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[11]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.saudavel[11]}</Text>
              </TouchableOpacity>

            </View>
              
              }
              {
                dano == "Não muito danificado" && 
                <View>
                <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[0])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[0]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[1])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[1]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[2])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[2]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[2]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[3])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[3]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[3]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[4])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[4]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[4]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[5])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[5]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[5]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[6])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[6]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[6]}</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[7])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[7]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[7]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[8])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[8]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[8]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[9])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[9]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[9]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[10])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[10]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[10]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.danificado[11])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[11]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.danificado[11]}</Text>
              </TouchableOpacity>

            </View>
              }

{
                dano == "Muito danificado" && 
                <View>
                <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[0])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[0]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[1])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[1]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[2])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[2]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[2]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[3])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[3]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[3]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[4])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[4]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[4]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[5])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                      {total[5]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[5]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[6])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[6]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[6]}</Text>
              </TouchableOpacity>


              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[7])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[7]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[7]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[8])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[8]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[8]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[9])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[9]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[9]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[10])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[10]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[10]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.content} onPress={()=>tratamento(tratamentos.destruido[11])}>
                  <View style={styles.markDay}>
                    <Text style={styles.txtDay}>
                    {total[11]}
                    </Text>
                  </View>
                <Text style={styles.tratamento}>{tratamentos.destruido[11]}</Text>
              </TouchableOpacity>

            </View>
              }

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
    containerCalendar:{
      width: '100%',
    },

    calendar:{
      width: 350,
      height: 350,
      borderRadius: 10,
      borderRadius: 40,
    },

    listContent:{
      flex: 1,
    },

    days:{
      flex: 1,
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
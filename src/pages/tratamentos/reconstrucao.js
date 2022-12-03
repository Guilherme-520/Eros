import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Reconstrucao() {




  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.back}>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <AntDesign style={styles.iconBack}  name="left" size={26} color='white' />
            </TouchableOpacity>
        </View>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Como reconstruir meu cabelo?</Text>
      </View>
      <SafeAreaView styles={styles.content}>  
       <ScrollView>
        <View style={styles.infos}>
            <Text style={styles.txtInfo}>
                <Text style={styles.steps}>1º passo</Text> Lave Corretamente os cabelos
                    usando um shampoo de limpeza profunda anti-resíduo, que irá
                    remover a sujeira e abrir as cutículas do fio para receber o
                    tratamento{'\n'}
                    <Text style={styles.steps}>2º passo</Text> – Remova o excesso de água dos fios{'\n'}
                    <Text style={styles.steps}>3º passo</Text>  – Aplique a máscara reconstrutora e massageie os fios{'\n'}
                    <Text style={styles.steps}>4º passo</Text> – Aguarde o tempo recomendado pelo fabricante da máscara{'\n'}
                    <Text style={styles.steps}>5º passo</Text> – Se você preferir potencializar a ação da máscara
                    hidratante, utilize uma touca térmica.{'\n'}
                    <Text style={styles.steps}>6º passo</Text> – Enxague bem{'\n'}
                    <Text style={styles.steps}>7º passo</Text> – Finalize com um condicionador para selar ainda mais as
                    cutículas do fio de cabelo{'\n'}
</Text>
        </View>
       </ScrollView>
      </SafeAreaView>
      
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    
  },

  back:{
    backgroundColor: "#3a2f78",
    padding: 15,
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
  infos:{
    marginTop: 25,
    marginLeft: 10,
  },

  txtInfo:{
    fontSize: 26,
  },

  steps:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },

  

})
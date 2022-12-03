import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Nutricao() {




  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.back}>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
            <AntDesign style={styles.iconBack}  name="left" size={26} color='white' />
            </TouchableOpacity>
        </View>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Como nutrir meu cabelo?</Text>
      </View>
      <SafeAreaView styles={styles.content}>  
       <ScrollView>
        <View style={styles.infos}>
            <Text style={styles.txtInfo}>
                <Text style={styles.steps}>1º passo</Text> Aplique o shampoo no couro cabeludo, massageando com as pontas dos
                    dedos. Ele limpará o cabelo suavemente, sem danificá-lo. Enxágue bem.{'\n'}
                    <Text style={styles.steps}>2º passo</Text> – Remova o excesso de água com uma toalha{'\n'}
                    <Text style={styles.steps}>3º passo</Text>  – Separe o cabelo em 4 mechas ou mais.{'\n'}
                    <Text style={styles.steps}>4º passo</Text> – Aplique a máscara de nutrição do comprimento às pontas e evite a raiz{'\n'}
                    <Text style={styles.steps}>5º passo</Text> – Enluve (Aplique fazendo massagem) mecha a mecha{'\n'}
                    <Text style={styles.steps}>6º passo</Text> – Deixe agir conforme o tempo indicado na embalagem do produto escolhido.
                    Normalmente, ele varia de 3 a 10 minutos{'\n'}
                    <Text style={styles.steps}>7º passo</Text> – – Não se esqueça de aplicar o condicionar no comprimento e nas pontas dos
                    fios! Ele é importante para fechar as cutículas que o shampoo abriu para que
                    os nutrientes da máscara penetrassem, por isso deve ser o terceiro passo.
                    Enxágue{'\n'}
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
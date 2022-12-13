import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function Esfoliacao() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.iconBack}
            name="left"
            size={26}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Como fazer a esfoliação de pele?</Text>
      </View>
      <SafeAreaView styles={styles.content}>
        <ScrollView>
          <View style={styles.infos}>
            <Text style={styles.txtInfo}>
              <Text style={styles.steps}>1º passo</Text> – Faça a limpeza do
              rosto como de costume{"\n"}
              <Text style={styles.steps}>2º passo</Text> – Aplique o esfoliante
              com a pele úmida ou seca, dependendo da indicação na embalagem do
              produto{"\n"}
              <Text style={styles.steps}>3º passo</Text> – Faça movimentos
              circulares sem pressionar muito para não machucar a pele{"\n"}
              <Text style={styles.steps}>4º passo</Text> – Enxágue e seque o
              rosto{"\n"}
              <Text style={styles.steps}>5º passo</Text> – Tonifique e hidrate a
              pele para finalizar o processo{"\n"}
              <Text style={styles.steps}>
                Esse último passo é super importante porque o esfoliante pode
                desequilibrar o pH e remover excessivamente a oleosidade, então
                é preciso devolver o equilíbrio à sua cútis,{"\n"}O esfoliante
                deve ser usado no máximo duas vezes por semana. Se a sua pele
                estiver mais ressecada, uma vez na semana já dá para ter bons
                resultados.
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    backgroundColor: "#3a2f78",
    padding: 15,
  },

  txtBack: {
    width: "100%",
    backgroundColor: "#3a2f78",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  Question: {
    fontSize: 34,
    color: "#fff",
    marginTop: 20,
    marginBottom: 25,
    marginLeft: 25,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  infos: {
    marginTop: 25,
    marginLeft: 10,
  },

  txtInfo: {
    fontSize: 26,
  },

  steps: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
});

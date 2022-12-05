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

export default function ProtecaoNormais() {
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
        <Text style={styles.Question}>Como proteger peles normais?</Text>
      </View>
      <SafeAreaView styles={styles.content}>
        <ScrollView>
          <View style={styles.infos}>
            <Text style={styles.txtInfo}>
              Macia, com poucos poros visíveis e aspecto saudável, produz óleo
              normalmente sem excesso de brilho. Encontrada em bebês, crianças
              ou em pessoas antes da puberdade. Dificilmente encontrada na fase
              adulta. São recomendados os filtros em formato sérum, loção ou
              spray, pois apresentam maior resistência ao suor e à água.
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

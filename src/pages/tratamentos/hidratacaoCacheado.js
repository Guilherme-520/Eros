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

export default function HidratacaoCacheado() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign
            style={styles.iconBack}
            name="left"
            size={26}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.txtBack}>
        <Text style={styles.Question}>Como Hidratar meu cabelo?</Text>
      </View>
      <SafeAreaView styles={styles.content}>
        <ScrollView>
          <View style={styles.infos}>
            <Text style={styles.txtInfo}>
              <Text style={styles.steps}>1º passo</Text> – Lave o cabelo com um
              shampoo específico para cabelos cacheados e, de preferência, sem
              sal.{"\n"}
              <Text style={styles.steps}>2º passo</Text> Aplique o produto por
              todo o cabelo e massageie a raiz.
              {"\n"}
              <Text style={styles.steps}>3º passo</Text> – Enxágue bem e não
              deixe resíduos do produto.{"\n"}
              <Text style={styles.steps}>4º passo</Text> –  Aplique uma máscara
              de hidratação ideal para cabelos cacheados e adicione 20ml de óleo
              de Argan.{"\n"}
              <Text style={styles.steps}>5º passo</Text> –  Deixe a máscara
              agir por 15 a 20 minutos.{"\n"}
              <Text style={styles.steps}>6º passo</Text> – Enxágue o cabelo com
              água fria ou morna e retire o produto por completo.{"\n"}
              <Text style={styles.steps}>7º passo</Text> – Seque o cabelo com
              uma toalha de microfibra, ou com uma camiseta de algodão, para não
              ressecar os fios e evitar a formação de frizz.{"\n"}
              <Text style={styles.steps}>8º passo</Text> –Aplique um leave-in
              para cabelos cacheados por todos os fios.
              {"\n"}
              <Text style={styles.steps}>9º passo</Text> – Penteie o cabelo com
              um pente de dentes largos.{"\n"}
              <Text style={styles.steps}>10º passo</Text> – – Para definir os
              cachos, use um secador ou difusor em conjunto com um ativador de
              cachos. E pronto!
              {"\n"}
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

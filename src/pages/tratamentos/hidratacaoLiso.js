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

export default function HidratacaoLiso() {
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
        <Text style={styles.Question}>Como Hidratar meu cabelo?</Text>
      </View>
      <SafeAreaView styles={styles.content}>
        <ScrollView>
          <View style={styles.infos}>
            <Text style={styles.txtInfo}>
              <Text style={styles.steps}>1º passo</Text> – Aplique um
              pré-shampoo (apenas se achar necessário) para retirar toda a
              oleosidade dos fios.{"\n"}
              <Text style={styles.steps}>2º passo</Text> – Em seguida, enxágue
              os fios e aplique o shampoo de sua preferência de acordo com o seu
              tipo de cabelo.{"\n"}
              <Text style={styles.steps}>3º passo</Text> – Enxágue novamente os
              fios. É importante evitar a água quente.{"\n"}
              <Text style={styles.steps}>4º passo</Text> – Passe um creme de
              hidratação sem excesso de óleos por todo o cabelo, sempre da
              altura das orelhas até as pontas.{"\n"}
              <Text style={styles.steps}>5º passo</Text> – Se você preferir
              potencializar a ação da máscara hidratante, utilize uma touca
              térmica.{"\n"}
              <Text style={styles.steps}>6º passo</Text> – Deixe o produto nos
              fios por 5 a 10 minutos.{"\n"}
              <Text style={styles.steps}>7º passo</Text> – Retire o creme com
              água fria.{"\n"}
              <Text style={styles.steps}>8º passo</Text> – Finalize o cabelo
              aplicando o condicionador de uso do seu dia a dia. Sempre aplique
              o produto da altura da orelha para baixo, e nunca aplique na raiz.
              {"\n"}
              <Text style={styles.steps}>9º passo</Text> – Enxágue bem o
              produto.{"\n"}
              <Text style={styles.steps}>10º passo</Text> – Deixe os fios
              secarem ao ar livre ou, se preferir, aplique um protetor térmico e
              seque-os com um secador.{"\n"}
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

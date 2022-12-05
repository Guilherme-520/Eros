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

export default function HidratacaoOndulado() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
              <Text style={styles.steps}>1º passo</Text> – Utilize shampoo e
              condicionador de limpeza suave, de preferência sem sal.{"\n"}
              <Text style={styles.steps}>2º passo</Text> – Lave os fios com o
              shampoo adequado.{"\n"}
              <Text style={styles.steps}>3º passo</Text> – Após a lavagem dos
              fios, aplique uma máscara de tratamento. É importante optar por um
              produto sem excesso de óleos. Passe o produto mecha por mecha no
              comprimento e nas pontas dos fios. Lembre-se de nunca aplicar na
              raiz do cabelo.
              {"\n"}
              <Text style={styles.steps}>4º passo</Text> – Deixe a máscara agir
              por alguns minutos, conforme recomendação do produto.{"\n"}
              <Text style={styles.steps}>5º passo</Text> – – Retire o produto
              com água fria ou morna.
              {"\n"}
              <Text style={styles.steps}>6º passo</Text> – Aplique o
              condicionador para o seu tipo de cabelo e enxágue com água fria
              novamente.{"\n"}
              <Text style={styles.steps}>7º passo</Text> – Pronto! Agora você
              pode deixar os seus cabelos secando naturalmente.{"\n"}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
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
    width: '100%',
    height: '100%',
  },
  infos: {
    flex: 1,
    marginTop: 25,
    marginLeft: 10,
    height: '100%',
    width: '100%',
  },

  txtInfo: {
    flex: 1,
    fontSize: 26,
    marginBottom: 15,
  },

  steps: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
});

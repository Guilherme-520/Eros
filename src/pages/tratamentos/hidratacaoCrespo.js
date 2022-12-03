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

export default function HidratacaoCrespo() {
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
              <Text style={styles.steps}>1º passo</Text> – Aposte nos produtos
              certos. Escolha o shampoo, creme de hidratação, condicionador e
              finalizador ideais para cabelos crespos.{"\n"}
              <Text style={styles.steps}>2º passo</Text> – Realize a lavagem dos
              fios apenas 2 vezes por semana com shampoo e condicionador
              apropriados para cabelos crespos.{"\n"}
              <Text style={styles.steps}>3º passo</Text> – Dica extra: lave o
              cabelo no dia da hidratação.{"\n"}
              <Text style={styles.steps}>4º passo</Text> – Se lembre de sempre
              enxaguar bem os fios, principalmente na hora da aplicação do
              shampoo.{"\n"}
              <Text style={styles.steps}>5º passo</Text> – Se preferir, o
              condicionador pode servir como um emoliente antes do shampoo. Ele
              vai ajudar a desembaraçar os fios antes de lavá-los com o shampoo
              e ajuda a diminuir a agressão do shampoo aos fios.{"\n"}
              <Text style={styles.steps}>6º passo</Text> – Depois da limpeza,
              aplique a máscara de hidratação e utilize pentes de madeira com
              dentes largos e finos para pentear os cabelos e distribuir o
              produto nos fios.{"\n"}
              <Text style={styles.steps}>7º passo</Text> – – Para potencializar
              a ação do creme, deixe o cabelo com o produto em uma touca
              térmica.{"\n"}
              <Text style={styles.steps}>8º passo</Text> – – Depois de 15
              minutos, retire o produto com água fria.{"\n"}
              <Text style={styles.steps}>9º passo</Text> – – Passe novamente o
              condicionador para selar as cutículas dos fios. Retire o produto
              com água e pronto! Você pode optar, agora, por deixar os cabelos
              secando naturalmente ou utilizar um secador ou difusor.{"\n"}
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

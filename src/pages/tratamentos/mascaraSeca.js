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

export default function MascaraSecas() {
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
        <Text style={styles.Question}>Mascaraa para peles secas</Text>
      </View>
      <SafeAreaView styles={styles.content}>
        <ScrollView>
          <View style={styles.infos}>
            <Text style={styles.txtInfo}>
              A pele seca possui pouca elasticidade e marcas de expressão mais
              visíveis. Normalmente são peles maduras (a partir dos 40 anos de
              idade), ou que são expostas diariamente a condições extremas, seja
              de frio, seja de calor. Por isso, as máscaras ideias são aquelas
              que devolvam os nutrientes necessários para a epiderme, garantindo
              um rosto luminoso e com marcas atenuadas. Busque por produtos que
              ofereçam hidratação profunda, e com minerais na sua composição.
              Alguns dos ativos hidratantes mais usados são o aloe vera, as
              vitaminas A, C, E e F, e os óleos minerais como os de amêndoas
              doces, de sementes de uva e de macadâmia. As máscaras indicadas
              são as de argila violeta, rica em magnésio, e a amarela, rica em
              silício e estimulante, além das de ouro, que hidratam e
              revitalizam a pele, suavizando linhas de expressão
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

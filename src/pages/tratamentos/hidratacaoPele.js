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

export default function HidratacaoPele() {
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
        <Text style={styles.Question}>Como fazer a hidratar pele?</Text>
      </View>
      <SafeAreaView styles={styles.content}>
        <ScrollView>
          <View style={styles.infos}>
            <Text style={styles.txtInfo}>
              Todo tipo de pele precisa de hidratação, inclusive as oleosas,
              pois muitas vezes seu brilho é confundido com a hidratação, quando
              na verdade esse brilho é p ecesso de cebo na pele.{"\n"}A
              hidratação deve ser feita diariamente e com o creme hidtatante de
              sua preferencia, aplique em todo o rosto de maneira uniforme e
              deixe secar
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

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native"

import api from "./src/services/api"

export default function App() {

  const [cep, setCep] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Digite seu CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 45000000"
          value={cep}
          onChangeText={ (texto) => setCep(texto)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.btn, { backgroundColor : "#1d75cd" }]}>
          <Text style={styles.textButton}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor : "#cd3e1d" }]}>
          <Text style={styles.textButton}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.result}>
        <Text style={styles.itemText}>CEP: </Text>
        <Text style={styles.itemText}>Rua: </Text>
        <Text style={styles.itemText}>Bairro: </Text>
        <Text style={styles.itemText}>Cidade: </Text>
        <Text style={styles.itemText}>Estado: </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    alignItems: "center"
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around"
  },
  btn: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 22,
    color: "#fff"
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    fontSize: 22
  }
})
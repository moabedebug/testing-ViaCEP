import React, { useState, useRef } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Keyboard
} from "react-native"

import api from "./src/services/api"

  

export default function App() {

  const [cep, setCep] = useState("")
  const [cepUser, setCepUser] = useState(null)
  const inputRef = useRef(null)

  async function buscar(){
    if(cep == "") {
      alert("Digite um Cep Valido")
      
      return
    }
    
    try{
      const response = await api.get(`/${cep}/json`)
      console.log(response.data)
      setCepUser(response.data)

      Keyboard.dismiss()
    }catch(error){
      console.log("ERROR: " + error)
    }

    

  }

  function limpar(){
    setCep("")
    inputRef.current.focus()
    setCepUser(null)
  }

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
            ref={inputRef}
          />
        </View>

        <View style={styles.areaBtn}>
          <TouchableOpacity 
            style={[styles.btn, { backgroundColor : "#1d75cd" }]}
            onPress={buscar}
            >
            <Text style={styles.textButton}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.btn, { backgroundColor : "#cd3e1d" }]}
            onPress={ limpar }
          >
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
        </View>

        { cepUser &&  
          <View style={styles.result}>
            <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
            <Text style={styles.itemText}>Rua: {cepUser.logradouro}</Text>
            <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
            <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
            <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
          </View>
        }
        
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
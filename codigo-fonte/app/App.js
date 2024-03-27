import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function 


App() {

  clicou = () => {
    Alert.alert("JP Barber", "Realizando Login!!");
  }
  return (
    <View style={styles.container}>

      <Image
      source={require('../app/assets/logo1.jpeg')}
      style={styles.logo}
      />

      <TextInput
      style={styles.input}
      placeholder='Digite o seu E-mail'
      />
      <TextInput
       style={styles.input}
       secureTextEntry={true}
       placeholder='Digite a sua senha'
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => {this.clicou()} }
      >

        <Text style={styles.botaoText}> Entrar</Text>
      </TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  logo: {
    width:150,    
    height:150,
    borderRadius:50 
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor:'#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#c2995b',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }

})

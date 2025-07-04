import React from "react";
import { View, Text, Image, Button, TouchableOpacity, TextInput } from "react-native";
import { stylesLogin } from "./login-styles";
import logo from "../../../assets/nubank-logo.png";
import { Home } from "../homePage/home";

export const Login = () => {
  return (
    <>
      <View style={stylesLogin.container}>
        <View style={stylesLogin.logo}>
          <Image source={logo} style={stylesLogin.logoImagem} />
        </View>

        <TextInput
          style={stylesLogin.input}
          placeholder="Digite seu cpf"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />

        <TextInput
          style={stylesLogin.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("Teste!");
            }}
            style={stylesLogin.button}
          >
            <Text
              // onPress={<Home />} funciona??
              style={stylesLogin.buttonText}
            >
              Usar senha do celular
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

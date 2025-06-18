import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import logo from "../../../assets/nubank-logo.png";

export const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logo}>
          {/* <Text>Bem-vindo, José</Text> */}
          <Image source={logo} style={styles.logoLogin} />
        </View>

        <View></View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Usar senha do celular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

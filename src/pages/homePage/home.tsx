import React from "react";
import { View, Text } from "react-native";
import { styles } from "./home-styles";

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cima}>
          <Text style={styles.ola}> Olá, José </Text>
        </View>
        <View style={styles.baixo}></View>
      </View>
    </>
  );
};

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./home-styles";
import eu from "../../../assets/jose-nubank.png";
import { RiBankCard2Line } from "react-icons/ri";

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cima}>
          <Image source={eu} />
          <Text style={styles.ola}> Olá, José </Text>
        </View>
        <View style={styles.baixo}>
          <Text style={styles.saldo}>Saldo em conta </Text>
          <Text style={styles.saldo}>R$ 100,00 </Text>

          <View style={styles.divBolinha}>
            <TouchableOpacity>
              <Text style={styles.bolinhas}>Área Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.bolinhas}>Pagar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.bolinhas}>Empréstimo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.bolinhas}>Caixinhas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.bolinhas}>Recarga Celular</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divCartoes}>
            {/* <RiBankCard2Line /> */}
            <TouchableOpacity>
              <Text style={styles.cartoes}>Meus cartões</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.saldo}>Cartão de crédito</Text>
          <Text style={styles.saldo}>Fatura atual</Text>
          <Text style={styles.saldo}>R$ 200,00</Text>
          <TouchableOpacity>
            <Text style={styles.cartoes}>Cashback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

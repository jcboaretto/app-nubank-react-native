import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./home-styles";
import eu from "../../../assets/jose-nubank.png";
import olhinho from "../../../assets/olhinhoCima.png";
import duvida from "../../../assets/duvidaCima.png";
import msgIcon from "../../../assets/msgCima.png";

import pix from "../../../assets/areaPix.png";
import boleto from "../../../assets/boleto.png";
import transferir from "../../../assets/transferir.png";
import depositar from "../../../assets/depositar.png";
import recarga from "../../../assets/recarga.png";
import cartao from "../../../assets/cartao.png";

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cima}>
          <View style={styles.iconesCima}>
            <View style={styles.fotoUsuario}>
              <Image source={eu} style={styles.fotoUsuario} />
            </View>
            <Text style={styles.ola}> Olá, José </Text>
            <Image source={olhinho} style={styles.iconCima} />
            <Image source={duvida} style={styles.iconCima} />
            <Image source={msgIcon} style={styles.iconCima} />
          </View>
        </View>
        <View style={styles.baixo}>
          <Text style={styles.saldo}>Saldo em conta </Text>
          <Text style={styles.saldo}>R$ 100,00 </Text>

          <View style={styles.divBolinha}>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={pix} />
              </View>
              <Text style={styles.ola}>Área Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={boleto} />
              </View>
              <Text style={styles.ola}>Pagar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={transferir} />
              </View>
              <Text style={styles.ola}>Transferir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={depositar} />
              </View>
              <Text style={styles.ola}>Depositar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={recarga} />
              </View>
              <Text style={styles.ola}>Recarga</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.divCartoes}>
            <Image source={cartao} />
            <Text style={styles.cartoes}>Meus cartões</Text>
          </TouchableOpacity>

          <Text style={styles.saldo}>Cartão de crédito</Text>
          <Text style={styles.saldo}>Fatura atual</Text>
          <Text style={styles.saldo}>R$ 200,00</Text>
          <TouchableOpacity style={styles.divCartoes}>
            <Text style={styles.cartoes}>Cashback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

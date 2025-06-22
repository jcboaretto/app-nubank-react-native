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
            <View style={styles.esquerdaCima}>
              <View style={styles.fotoUsuario}>
                <Image source={eu} style={styles.fotoUsuarioImg} />
              </View>
              <Text style={styles.ola}>Olá, José</Text>
            </View>

            <View style={styles.direitaCima}>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={olhinho} style={styles.iconCima} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={duvida} style={styles.iconCima} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={msgIcon} style={styles.iconCima} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.baixo}>
          {/* 
            MELHORIA: Organizar melhor a seção do saldo
            Separar o label "Saldo em conta" do valor "R$ 100,00"
          */}
          <View style={styles.saldoContainer}>
            <Text style={styles.saldoMsg}>Saldo em conta</Text>
            <Text style={styles.saldoValor}>R$ 100,00</Text>
          </View>

          <View style={styles.divBolinha}>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={pix} />
              </View>
              {/* ALTERAÇÃO: Usar classe específica para texto dos ícones */}
              <Text style={styles.textoIcone}>Área Pix</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={boleto} />
              </View>
              <Text style={styles.textoIcone}>Pagar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={transferir} />
              </View>
              <Text style={styles.textoIcone}>Transferir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={depositar} />
              </View>
              <Text style={styles.textoIcone}>Depositar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBolinha}>
              <View style={styles.bolinhas}>
                <Image source={recarga} />
              </View>
              <Text style={styles.textoIcone}>Recarga</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.divCartoes}>
            <Image source={cartao} />
            <Text style={styles.cartoes}>Meus cartões</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.divPixCartao}>
            {/* <Image source={cartao} /> */}
            <Text style={styles.pixCartao}>Faça um pix utilizando o cartao de crédito e parcele em até 12x.</Text>
          </TouchableOpacity>

          <View style={styles.divCartao}>
            <Text style={styles.cartaoText}>Cartão de crédito</Text>
            <Text style={styles.cartaoSubText}>Fatura atual</Text>
            <Text style={styles.cartaoValor}>R$ 200,00</Text>
          </View>

          <TouchableOpacity style={styles.divCartoes}>
            <Text style={styles.cartoes}>Cashback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

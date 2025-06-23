import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  cima: {
    flex: 0.167,
    backgroundColor: "#591E8C",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },

  iconesCima: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "green",
    paddingHorizontal: 0,
  },

  esquerdaCima: {
    flexDirection: "column",
    alignItems: "flex-start",
    // backgroundColor: "#fff",
  },

  direitaCima: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },

  fotoUsuario: {
    width: 90,
    height: 90,
    borderRadius: 18,
  },

  fotoUsuarioImg: {
    width: 75,
    height: 75,
    borderRadius: 20,
  },

  ola: {
    color: "#FBFFFF",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
  },

  iconButton: {
    marginLeft: 20,
  },

  iconCima: {
    width: 23,
    height: 23,
  },

  textoIcone: {
    color: "#FBFFFF",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },

  baixo: {
    flex: 0.833,
    backgroundColor: "#000",
  },

  saldoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  saldoMsg: {
    color: "#FBFFFF",
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "400",
    marginBottom: 4,
  },

  saldoValor: {
    color: "#FBFFFF",
    fontFamily: "Roboto",
    fontSize: 32,
    fontWeight: "bold",
  },

  saldo: {
    color: "#FBFFFF",
    alignItems: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    padding: 20,
  },

  divCartao: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  cartaoText: {
    color: "#FBFFFF",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 4,
  },

  cartaoSubText: {
    color: "#AAAAAA",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 4,
  },

  cartaoValor: {
    color: "#FBFFFF",
    fontSize: 25,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },

  textBolinha: {
    gap: 10,
    alignItems: "center",
  },

  divBolinha: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 20,
  },

  bolinhas: {
    backgroundColor: "#222222",
    borderRadius: 200,
    width: 70,
    height: 70,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },

  divCartoes: {
    borderRadius: 18,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginHorizontal: 19,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 18,
    backgroundColor: "#222222",
  },

  cartoes: {
    borderRadius: 8,
    color: "#FBFFFF",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  },
  divPixCartao: {
    borderRadius: 18,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginHorizontal: 19,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 18,
    backgroundColor: "#1E2A4A",
  },

  pixCartao: {
    borderRadius: 8,
    color: "#FBFFFF",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  },
});

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
  fotoUsuario: {
    justifyContent: "center",
    width: 80,
    height: 75,
  },
  iconesCima: {
    // backgroundColor: "#eb4034",
    width: 350,
    height: 40,

    flexDirection: "row",
    gap: 20,
  },
  iconCima: {
    justifyContent: "space-around",
    width: 23,
    height: 23,
  },
  ola: {
    color: "#FBFFFF",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "flex-start",
  },
  textBolinha: {
    gap: 10,
    alignItems: "center",
  },
  baixo: {
    flex: 0.833,
    backgroundColor: "#000",
  },
  saldo: {
    color: "#FBFFFF",
    alignItems: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    padding: 20,
  },
  divBolinha: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
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
    // width: 350,
    // height: 50,
    color: "#FBFFFF",
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  },
});

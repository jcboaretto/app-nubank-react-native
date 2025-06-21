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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    height: "50%",
  },
  ola: {
    color: "#FBFFFF",
    fontSize: 16,
    fontWeight: "bold",
    padding: 20,
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
    flexDirection: "row",
    gap: 10,
  },
  bolinhas: {
    backgroundColor: "#222222",
    borderRadius: 200,
    width: 70,
    height: 70,
    fontWeight: "bold",
    textAlign: "center",
  },
  divCartoes: {
    padding: 20,
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  cartoes: {
    backgroundColor: "#222222",
    borderRadius: 8,
    width: 400,
    height: 50,
    color: "#FBFFFF",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
  },
});

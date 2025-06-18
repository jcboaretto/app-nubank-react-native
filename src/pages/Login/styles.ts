import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#830AD1",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoLogin: {
    flex: 1,
    width: 180, // Tamanho menor
    height: 150, // Tamanho menor
    resizeMode: "contain", // Mantém proporção
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // flex: 1,
    backgroundColor: "#FBFFFF",
    borderRadius: 9999,
    color: "#000",
    height: 35,
    width: 250,
    marginBottom: 170,
  },
  buttonText: {
    flex: 1,
    alignSelf: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
});

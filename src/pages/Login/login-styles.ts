import { StyleSheet } from "react-native";

export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#830AD1",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
  },
  logoImagem: {
    width: 180, // Tamanho menor
    height: 150, // Tamanho menor
    resizeMode: "contain", // Mantém proporção
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
  },
  button: {
    // flex: 1,
    backgroundColor: "#FBFFFF",
    borderRadius: 9999,
    color: "#000",
    height: 40,
    width: 250,
    marginBottom: 50,
  },
  buttonText: {
    flex: 1,
    alignSelf: "center",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
});

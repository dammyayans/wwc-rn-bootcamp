import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.brandContainer}>
        <Text style={styles.logo}>Dammy ayans</Text>
        <Text style={styles.logoText}>Welcome, Please Sign in</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.8)"
          style={styles.textInput}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.8)"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "stretch",
    justifyContent: "center",
  },
  brandContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "midnightblue",
    marginBottom: 8,
  },
  logoText: {
    fontSize: 18,
    color: "#fff",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 24,
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    backgroundColor: "midnightblue",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  textInput: {
    marginVertical: 8,
    padding: 8,
    borderColor: "midnightblue",
    borderStyle: "solid",
    borderWidth: 2,
    width: "80%",
    fontSize: 16,
  },
});

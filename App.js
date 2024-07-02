import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";

// form validation.
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  PasswordLength: Yup.number()
    .min(4, "Should be min of 4 characters.")
    .max(16, "Should be max 0f 16 characters")
    .required("Length is required."),
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

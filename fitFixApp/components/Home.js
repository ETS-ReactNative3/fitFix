import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import ImageOverlay from "react-native-image-overlay";

export default function Home({ navigation }) {
  return (
    <ImageBackground source={require("../assets/equipmentPhoto2..jpeg")} resizeMode="cover" style={styles.image}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar style="auto" />
        <View style={styles.buttonSection}>
          <Image
            style={{
              resizeMode: "cover",
              height: 200,
              width: 200
            }}
            source={require("../assets/fitFixLogo_White.png")}
          />
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Form")}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("List")}>
            <Text style={styles.buttonText}>See full list of exercises</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center"
    // textTransform: "uppercase"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "center"
  },
  homeButton: {
    color: "#ffffff",
    elevation: 8,
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20
  }
});

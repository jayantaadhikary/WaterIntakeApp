import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/welcome-background.png")}
        style={{ flex: 1, width: "100%", height: "100%" }}
      >
        <View style={styles.welcome}>
          <Pressable
            android_ripple={{ color: "#ccd" }}
            onPress={onPressHandler}
          >
            <Text style={styles.message}>Welcome</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  welcome: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#24B6FF",
    width: "75%",
    marginTop: "auto",
    elevation: 5,
    marginBottom: "10%",
    marginHorizontal: "13%",
  },
  message: {
    fontSize: 20,
    fontWeight: "500",
    color: "#F4F8FB",
    textAlign: "center",
    padding: 10,
    // paddingHorizontal: 15,
  },
});

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../components/Title";
import CustomButton from "../components/CustomButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  /*roundsNumber kaç defada buldugunu hesaplamak için oluşturuldu*/
  return (
    <View style={styles.container}>
      <Title>Oyun Tamamlandı!</Title>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require("../assets/c.jpeg")} />
      </View>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber}>{roundsNumber}</Text> denemeyle
        <Text style={styles.countAndNumber}> {userNumber}</Text> sayısını
        buldun!
      </Text>
      <CustomButton onPress={onStartNewGame}>Yeni Oyuna Başla</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: 350,
    height: 350,
    overflow: "hidden",
    borderRadius: 150,
    borderWidth: 3,
    margin: 30,
  },
  image: {
    width: "100%",
    //height: "100%",
  },
  result: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    marginBottom: 25,
  },
  countAndNumber: {
    color: "black",
  },
});

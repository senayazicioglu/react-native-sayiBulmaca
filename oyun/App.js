import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCounts, setGuessCounts] = useState(0);

  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfGuess) {
    setGameIsOver(true);
    setGuessCounts(numberOfGuess);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessCounts(0);
  }
  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    ); //userNumber isimli props olusturduk cunku diger ekranlarda(GameScreen) kullanmamız lazım
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessCounts}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/a.jpg")}
        imageStyle={styles.backImage} //arka plandaki resimin ayarları ile oynamamıza olanak sağlar(imageStyşe)
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.81,
  },
});

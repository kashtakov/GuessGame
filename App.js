import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView} from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameSCreen';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';




export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver]= useState(true);
  const [guessRounds, setGuessRounds]= useState(0);

  const [fontsLoaded]=useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

function pickedeNumberHandler(pickedNumber){
  setUserNumber(pickedNumber);
  setGameIsOver(false);
}

function gameOverHandler(numberOfRounds){
  setGameIsOver(true);
  setGuessRounds(numberOfRounds);
}

function startNewGameHandler(){
setUserNumber(null);
setGuessRounds(0);

}


  let screen = <StartGameScreen onPickNumber={pickedeNumberHandler} onGameOver={gameOverHandler}/>

  if (userNumber){
    screen = <GameScreen userNumber={userNumber}  onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>  
  }


  return (
    <>
    <StatusBar style='light'/>
    <ImageBackground 
    source={require('./assets/images/background.jpg')}
    resizeMode='cover'
    style={[styles.rootScreen, styles.ImageBackground]}
    
    >
      <SafeAreaView  style={styles.rootScreen}>
        <StatusBar
        barStyle="light-content" 
        />
        
      {screen}
     
      </SafeAreaView>
     
     </ImageBackground>
  
  </>
  
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
    opacity: 1,
    
  },
  ImageBackground:{
    opacity:0.9
  },

});




import { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameSCreen';



export default function App() {
  const [userNumber, setUserNumber] = useState();


function pickedeNumberHandler(pickedNumber){
  setUserNumber(pickedNumber);
}

  let screen = <StartGameScreen onPickNumber={pickedeNumberHandler}/>

  if (userNumber){
    screen = <GameScreen/>
  }

  return (
    <ImageBackground 
    source={require('./assets/images/background.jpg')}
    resizeMode='cover'
    style={styles.rootScreen}
    
    >
     {screen}
     </ImageBackground>
 
  
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  }
});

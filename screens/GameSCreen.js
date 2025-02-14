import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import{ Ionicons} from '@expo/vector-icons';
import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import GuessLogItem from "../components/game/GuessLoginItrm";




function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minBoundary = 1;
  let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){

        const initialGuess = generateRandomBetween
        (1, 
        100, 
        userNumber
        );
        const [currentGuess, setCurrentGuess] = useState(initialGuess);
        const [guessRounds, setGuessRounds] = useState([initialGuess]);
        const { width, height } = useWindowDimensions();

        useEffect(()=>{
          if(currentGuess ===userNumber){
            onGameOver(guessRounds.length);
          }
        }, [currentGuess, userNumber, onGameOver])

        useEffect(()=>{
          minBoundary = 1;
          maxBoundary = 100;
        },[])

        function nextGuessHandler(direction){
          if ((direction ==='lower' && currentGuess < userNumber) || 
          (direction === 'greater' && currentGuess >userNumber))
          {
            Alert.alert("Dont lie!!!", "You know this is wrong!!", [{text:'Sorry!', style:'cancel'},])
            return;
          }
          if(direction === 'lower'){
            maxBoundary = currentGuess;
          
          }else{
            minBoundary = currentGuess +1;
            
          }
          
          const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
          setCurrentGuess(newRndNumber);
          setGuessRounds(prevGuessRounds=>[newRndNumber, ...prevGuessRounds])
        }

        const guessRoundsListLength = guessRounds.length;

        let content = (<><NumberContainer>{currentGuess}</NumberContainer>
        <Card>
         <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
         <View style={styles.buttonsContainer}>
         <View style={styles.buttonContainer}>          
         <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="remove" size={24} color='white'/></PrimaryButton>
         </View>
         <View style={styles.buttonContainer}> 
         <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="add" size={24} color='white'/></PrimaryButton>
         </View>
         </View>
        </Card></>);

        if (width > 500){
          content = <>
         
           <View style={styles.buttonsContainerWide}>
           <View style={styles.buttonContainer}>   
                   
         <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="remove" size={24} color='white'/></PrimaryButton>
         </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}> 
         <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="add" size={24} color='white'/></PrimaryButton>
         </View>
         </View>
          </>

          
        }

    return(
        <View style={styles.screen}>
           <Title>Opponent`s Guess</Title>
           {content}
           <View style={styles.listContainer}>
            <FlatList 
            data={guessRounds} 
            renderItem={(itemData)=><GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}/>
            
            
           </View>
        </View>)

}

export default GameScreen;


const styles= StyleSheet.create({
    screen:{
        flex: 1,
        padding: 24,
        alignItems: 'center',
    }, 
    InstructionText:{
      marginBottom: 12,
    },
    buttonsContainer:{
      flexDirection:'row'
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer:{
      flex: 1
  }, 
  listContainer:{
    flex: 1,
    padding: 16, 
  }
    
})


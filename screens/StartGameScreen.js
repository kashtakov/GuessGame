import { useState } from 'react';
import {View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/UI/Title';
import Card from '../components/UI/Card';
import InstructionText from '../components/UI/InstructionText';






function StartGameScreen({onPickNumber}){

    const { width, height } = useWindowDimensions();

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    
    }
    
    function resetInputHandler(){
        setEnteredNumber('');
    }
    
    function confirmInputHandler(){
    
        const chosenNumber = parseInt(enteredNumber);
    
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number',
                "Number must be in range between 1 and 99",
                [{ text: 'Okay', style:'destructive', onPress:resetInputHandler}]
            );
            return;
    
        }
    
        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;
    return(
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title>Guess my number</Title>
       <Card>
            <InstructionText>Enter a number</InstructionText> 
            <TextInput style={styles.numberInput}
            keyboardType="numeric"
            maxLength={2}
            value={enteredNumber}
            onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
                <View style={styles.buttonContainer}> <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
           
            </View>
            
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    rootContainer:{
        flex: 1,
        //marginTop: deviceHeight < 400 ? 30 : 100,
        alignItems: 'center',
    },
   

    
    numberInput:{
        height: 50,
        fontSize: 32,
        borderColor: Colors.accent500,
        borderBottomWidth: 3,
        borderBottomColor:Colors.accent500,
        borederBottomWidth: 1,
        color: '#dd832f',
        marginVertical: 15,
        fontWeight: 'bold',
        
    }, 
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex: 1
    }

});
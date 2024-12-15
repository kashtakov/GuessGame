import { useState } from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';





function StartGameScreen({onPickNumber}){

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

    return(
        <View style={styles.inputContainer}>
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
            
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 100,
        marginHorizontal: 24,
        pudding: 16,
        backgroundColor:'#420623',
        borderRadius: 8,
        elevation: 4,
        shadowOffset:{ width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25

    },
    numberInput:{
        height: 50,
        fontSize: 32,
        borderColor: '#ddb52f',
        borderBottomWidth: 3,
        borderBottomColor:'#ddb52f',
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
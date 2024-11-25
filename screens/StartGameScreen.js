import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen(){

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        marginHorizontal: 24,
        pudding: 16,
        backgroundColor:'#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowOffset:{ width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25

    },
    numberInput:{
        height: 50,
        fontSize: 32,
        borderBottomColor:'#ddb52f',
        borederBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    }

});
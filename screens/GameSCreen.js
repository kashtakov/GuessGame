import { Text, StyleSheet } from "react-native";


function GameScreen(){
    return(
        <Text style={styles.textBlock}>This is game Screen!!!</Text>
    )

}

export default GameScreen;


const styles= StyleSheet.create({
    textBlock:{
        color:'white',
        fontSize: 25,
        textAlign: 'center',
        flex:1,
        marginHorizontal: 150
    }
})


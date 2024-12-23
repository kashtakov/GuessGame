import { View, Text, Pressable, StyleSheet } from "react-native";


function PrimaryButton({ children, onPress }){

   
    return(
        <View style={styles.buttonOuterContaqiner}>
        <Pressable
        style={({pressed}) => pressed  ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={onPress} 
        android_ripple={{color:'#720643'}}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>
       
    )

}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContaqiner:{
        borderRadius: 28,
        margin: 4,
        overflow:'hidden'
    },
    buttonInnerContainer:{
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16, 
        margin:4,
        elevation: 2
    },
    buttonText:{
        color: 'white',
        textAlign:'center', 
    },
    pressed:{
        opacity: 0.75,

    }
});



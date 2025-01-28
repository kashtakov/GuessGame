import { Text, StyleSheet } from "react-native";

function Title({children}){
return(
     <Text style={styles.title}>{children}</Text>
)
}


export default Title;

const styles = StyleSheet.create({

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#FFFFFF',
        padding: 12,
        maxWidth: '%80',
        width: 300,
    }
});
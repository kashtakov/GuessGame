import { Text, View, Image, StyleSheet, ScrollView,  useWindowDimensions} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    
   const { width, height} = useWindowDimensions();
    
   let imageSize = 300;

   if (width < 380){
    imageSize = 150;
   }


   if (height < 400){
    imageSize = 80;
   }


   const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
   }
    return(
        <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
    <View style={[styles.imageContainer, imageStyle]}>
        
        <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
    <Text style={styles.summoryText}>Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.hightlight}>{userNumber}</Text>.</Text>
   <PrimaryButton onPress={onStartNewGame}>START NEW GAME</PrimaryButton>
    </View>
    </ScrollView>
    )
}

export default GameOverScreen;  

//const deviceWidth=Dimensions.get('window').width;

const styles=StyleSheet.create({

    screen:{
        flex: 1
    },
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 24,
    },
    
    imageContainer:{
        //width: deviceWidth < 380 ? 150 : 300,
        //height: deviceWidth < 380 ? 150 : 300,
        //borderRadius:deviceWidth < 380 ? 75 : 150,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow:'hidden',
        margin: 39, 

    },
    image:{
        width:'100%',
        height:'100%',
    },
    summoryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        color:Colors.accent500,
        marginVertical: 24,
    },
    hightlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500,
    }
}); 
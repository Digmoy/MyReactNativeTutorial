import React from "react";
import { View,Button,Alert} from "react-native";
import styles from "../styles";

const CustomAlertScreen =({ navigation }) =>{

    const pressHandler = () =>{
         Alert.alert('Warning','Are you sure you want to delete?',[
             {text:"Yes",onPress:() =>console.log("Yes pressed")},
             {text:"No",onPress: ()=> noHandler()}
         ])
    }

    const noHandler = () =>{

    }

    return(
        <View style={styles.container}>
            <Button title='Click' onPress={()=> pressHandler()}/>
        </View>
    )
}

export default CustomAlertScreen
import React, {useState} from "react";
import { Alert, Button,TextInput,View } from "react-native";
import styles from "../styles";

const AlertScreen = ({ navigation }) =>{

    const[age,setAge] = useState(0)

    const ageHandler = () =>{
        if(age > 21){
            Alert.alert("Hello..!!"+age)
        }
        else
        {
            Alert.alert("Hi..!!"+age) 
        }
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.inputStyle} onChangeText={(text) => setAge(text)}/>
            <Button title="Click" onPress={()=>ageHandler()}/>
        </View>
    )
}

export default AlertScreen
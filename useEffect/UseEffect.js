import React,{useState,useEffect} from "react";
import { View,Text, Button } from "react-native";
import styles from "../styles";

const UseEffectScreen =({ navigation }) =>{
 
    const[number,setNumber] = useState(0)

    useEffect(()=> console.log('DOM is updated',number))

    return(
        <View>
            <Text style={styles.lebelStyle}>{number}</Text>
            <Button title="Update" onPress={()=> setNumber(number+1)}/>
        </View>
    )
}

export default UseEffectScreen
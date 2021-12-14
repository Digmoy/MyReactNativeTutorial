import React,{useState} from "react";
import { View,Switch,Text} from "react-native";
import styles from "../styles";


const SwitchScreen =({ navigation }) =>{
    
    const [isEnable,setIsEnable] = useState(false)

    const toggleSwitch =() =>{
        setIsEnable(previousState =>!previousState)
    }

    return(
        <View style={styles.container}>
            <Text>Toggle is {isEnable ? "On" : "Off"}</Text>
            <Switch 
            trackColor={{false:'red',true:'green'}}
            thumbColor={isEnable ? "yellow" : "pink"}
            onValueChange={toggleSwitch}
            value={isEnable}/>
        </View>
    )
}

export default SwitchScreen
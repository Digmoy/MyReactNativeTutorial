import React,{useState} from "react";
import { View ,Text,Pressable} from "react-native";
import styles from "../styles";

const PressableScreen = ({ navigation }) =>{

    const[count,setCount] = useState(0)

    return(
        <View style={styles.container}>
            <Text>{count}</Text>
            <Pressable style={styles.pressStyle} onPress={()=>setCount(count+1)}>
            <Text>Press Me</Text>
            </Pressable>
        </View>
    )
}

export default PressableScreen
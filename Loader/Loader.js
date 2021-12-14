import React,{useState} from "react";
import { ActivityIndicator, Button, View } from "react-native";
import styles from "../styles";

const LoaderScreen = ({ navigation }) =>{

    const[show,setShow] = useState(false)

    const clickMe = () =>{
        setShow(true)
        setTimeout(()=>{
            setShow(false)
        },3000)
    }

    return(
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'red'} animating={show}/>

            <Button title="Click" onPress={() => clickMe()}/>

        </View>
    )
}

export default LoaderScreen
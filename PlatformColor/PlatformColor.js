import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";

const PlatformColorScreen = ({ navigation }) =>{

    return(
        <View style={styles.container}>
            <Text style={styles.lable}>Native Color</Text>
        </View>
    )
}

export default PlatformColorScreen
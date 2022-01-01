import React from "react";
import { View,Text,Platform } from "react-native";
import styles from "../styles";

const DeviceInfoScreen = ({ navigation }) =>{
    console.log(Platform.OS)
    return(
        <View style={styles.container}>
            <Text>OS</Text>
            <Text style={styles.value}>{Platform.OS}</Text>
      

            <Text>OS Version</Text>
            <Text style={styles.value}>{Platform.Version}</Text>

            <Text>isTV</Text>
            <Text style={styles.value}>{Platform.isTV.toString()}</Text>

            {Platform.OS==="ios" && <> 
            <Text>isTV</Text>
            <Text style={styles.value}>{Platform.isPad.toString()}</Text>
            </>}

            <Text>Constants</Text>
            <Text style={styles.value}>{JSON.stringify(Platform.constants,null,2)}</Text>


        </View>
    )
}

export default DeviceInfoScreen
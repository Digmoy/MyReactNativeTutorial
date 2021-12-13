import React, { useState } from "react";
import { View, Text,TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,Alert } from "react-native";
import styles from "../styles";

const CustomButtonScreen = ({ navigation }) => {

    const [name,setName] = useState("")

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput placeholder="Enter Name" style={styles.textInputStyle} onChangeText={(text) => setName(text)} />
                <TouchableOpacity onPress={()=>Alert.alert("Hi user "+name)}>
                    <View style={styles.customButtomStyle}>
                        <Text style={styles.textStyle}>Press</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default CustomButtonScreen
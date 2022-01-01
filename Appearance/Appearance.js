import React, { useState } from "react";
import { View, Text, TextInput, Appearance } from "react-native";

const AppearanceScreen = ({ navigation }) => {

    const colorSchema = Appearance.getColorScheme();
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)



    return (
        <View style={{
            flex: 1,
            padding: 20,
            backgroundColor: colorSchema === 'light' ? "white" : "gray"
        }}>

            <TextInput style={{
                marginTop: 20,
                backgroundColor: colorSchema === 'light' ? "gray" : "white",
                color: colorSchema === 'light' ? "white" : "black",
                padding:20
            }}
            placeholder="Enter Your Name"
                onChangeText={(text) => setName(text)} />


            <TextInput style={{
                marginTop: 20,
                backgroundColor: colorSchema === 'light' ? "gray" : "white",
                color: colorSchema === 'light' ? "white" : "black",
                padding:20
            }}
            placeholder="Enter Your Age"
                onChangeText={(text) => setAge(text)} />

            <Text style={{ fontSize: 20, marginTop: 20, color: colorSchema === 'light' ? "black" : "white" }}>{name} {age}</Text>

        </View>
    )

}

export default AppearanceScreen
import React,{useState} from "react";
import { SectionList, Text, View } from "react-native";
import styles from "../styles";

const SectionListScreen = ({ navigation }) =>{

    const DATA = [
        {
            title: "Main dishes",
            data: ["Pizza", "Burger", "Risotto"]
          },
          {
            title: "Sides",
            data: ["French Fries", "Onion Rings", "Fried Shrimps"]
          },
          {
            title: "Drinks",
            data: ["Water", "Coke", "Beer"]
          },
          {
            title: "Desserts",
            data: ["Cheese Cake", "Ice Cream"]
          }
    ]

    const Item = ({ title }) => (
        <View style={styles.itemStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <SectionList  
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section:{title} }) => (
                <Text style={styles.headerStyle}>{title}</Text>
            )}
            />
        </View>
    )

}
export default SectionListScreen
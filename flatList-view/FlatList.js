import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const FlatListScreen =({ navigation }) =>{
    const [fruit,setFruit] = useState([
        { name: 'Apple', id: '1'},
        { name: 'Watermelon', id: '2'},
        { name: 'Orange', id: '3'},
        { name: 'Pear', id: '4'},
        { name: 'Cherry', id: '5'},
        { name: 'Strawberry', id: '6'},
        { name: 'Nectarine', id: '7'},
        { name: 'Grape', id: '8'},
        { name: 'Mango', id: '9'},
        { name: 'Blueberry', id: '10'},
        { name: 'Pomegranate', id: '11'},
        { name: 'Plum', id: '12'},
        { name: 'Banana', id: '13'},
        { name: 'Raspberry', id: '14'},
        { name: 'Mandarin', id: '15'},
        { name: 'Jackfruit', id: '16'},
        { name: 'Papaya', id: '17'},
        { name: 'Kiwi', id: '18'},
        { name: 'Pineapple', id: '19'},
        { name: 'Lime', id: '20'},
      ])

    const pressHandler = (id) =>{
        console.log(id)
        setFruit((prevFruit) => {
            return prevFruit.filter(item => item.id != id)
        })
    }

    return(
        <View style={styles.container}>
            <FlatList
            keyExtractor={(item) => item.id}
             data={fruit}
             renderItem={({ item }) => (
                 <TouchableOpacity onPress = {() => pressHandler(item.id)}>
                    <Text style={styles.itemStyle}>{item.name}</Text>
                 </TouchableOpacity>
              
             )}
            />
        </View>
    )
}

export default FlatListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingHorizontal: 20
    },
    itemStyle: {
        marginTop: 15,
        padding: 10,
        backgroundColor: 'pink',
        fontSize: 20
    }
})
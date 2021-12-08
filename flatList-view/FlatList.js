import React, { useState } from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';

const FlatListScreen =({ navigation }) =>{
    const [fruit,setFruit] = useState([
        { name: 'Apple', key: '1'},
        { name: 'Watermelon', key: '2'},
        { name: 'Orange', key: '3'},
        { name: 'Pear', key: '4'},
        { name: 'Cherry', key: '5'},
        { name: 'Strawberry', key: '6'},
        { name: 'Nectarine', key: '7'},
        { name: 'Grape', key: '8'},
        { name: 'Mango', key: '9'},
        { name: 'Blueberry', key: '10'},
        { name: 'Pomegranate', key: '11'},
        { name: 'Plum', key: '12'},
        { name: 'Banana', key: '13'},
        { name: 'Raspberry', key: '14'},
        { name: 'Mandarin', key: '15'},
        { name: 'Jackfruit', key: '16'},
        { name: 'Papaya', key: '17'},
        { name: 'Kiwi', key: '18'},
        { name: 'Pineapple', key: '19'},
        { name: 'Lime', key: '20'},
      ])

    return(
        <View style={styles.container}>
            <FlatList
             data={fruit}
             renderItem={({ item }) => (
                <Text style={styles.itemStyle}>{item.name}</Text>
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
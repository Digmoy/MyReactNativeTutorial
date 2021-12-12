import React from 'react';
import {StyleSheet, Button, View , TouchableHighlight} from 'react-native';

const MainScreen = ({navigation }) => {
    return(
        <View style={styles.screenStyle}>
            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='TextInput' onPress={() => navigation.navigate('TextInput')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='ListView' onPress={() => navigation.navigate('ListView')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='FlatList' onPress={() => navigation.navigate('FlatList')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Alert' onPress={() => navigation.navigate('Alert')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Custom Alert' onPress={() => navigation.navigate('Custom_Alert')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Image' onPress={() => navigation.navigate('Image')}/>
            </TouchableHighlight>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    screenStyle: {
      padding: 15
    },
    buttonStyle: {
        color: 'red',
        marginTop: 20
    }

});
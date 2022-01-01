import React from 'react';
import {StyleSheet, Button, View , TouchableHighlight,ScrollView} from 'react-native';

const MainScreen = ({navigation }) => {
    return(
        <View style={styles.screenStyle}>
            <ScrollView>
          
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

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Custom Button' onPress={() => navigation.navigate('Custom Button')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='UseEffect' onPress={() => navigation.navigate('UseEffect')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='switch' onPress={() => navigation.navigate('switch')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Loader' onPress={() => navigation.navigate('Loader')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Section' onPress={() => navigation.navigate('Section')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Pressable' onPress={() => navigation.navigate('Pressable')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='RefreshControl' onPress={() => navigation.navigate('RefreshControl')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Appearance' onPress={() => navigation.navigate('Appearance')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='DeviceInfo' onPress={() => navigation.navigate('DeviceInfo')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='Animation' onPress={() => navigation.navigate('Animation')}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonStyle}>
            <Button title='PlatformColor' onPress={() => navigation.navigate('PlatformColor')}/>
            </TouchableHighlight>

        
                  
            </ScrollView>
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
import React from "react";
import {Image, View} from "react-native"
import styles from "../styles";

const ImageScreen = ({ navigation }) =>{

    return(
        <View style = {styles.container}>

            <Image style={{width: '100%',height: '80%'}}
            source={{uri: 'https://estaticos.megainteresting.com/media/cache/1140x_thumb/uploads/images/gallery/5da5a5fa5bafe827843c9877/marvel-heroes_0.jpg'}}/>

            

        </View>
    )
}

export default ImageScreen
import React, { useRef } from "react";
import { View, Text, Button, Animated } from "react-native";
import styles from "../styles";

const AnimationScreen = ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
    }

    return (
        <View style={styles.animatedContainer}>
            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View>
            <View style={styles.buttonRow}>
                <Button title="Fade In View" onPress={fadeIn} />
                <Button title="Fade Out View" onPress={fadeOut} />
            </View>
        </View>
    )
}

export default AnimationScreen
import React,{useState} from "react";
import { View,Text,ScrollView,RefreshControl } from "react-native";
import styles from "../styles";

const RefreshControlScreen = ({ navigation }) =>{

    const[refresh,setRefresh] = useState(false)

    const pullToRefresh = () =>{
        setRefresh(true)
        setTimeout(()=>{
            setRefresh(false)
        },10000)
    }

    return(
        <View style={styles.container}>
            <ScrollView
            refreshControl={
                <RefreshControl
                refreshing={refresh}
                onRefresh={() => pullToRefresh()}/>
            }>
              <Text>Pull to refresh</Text>          
            </ScrollView>
        </View>
    )

}
export default RefreshControlScreen
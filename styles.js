import { StyleSheet,Platform,PlatformColor } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingHorizontal: 20
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 0.5
    },
    customButtomStyle: {
        backgroundColor: 'blue',
        padding: 20,
        marginTop: 15,
        alignItems: "center",
        borderRadius: 15,
    },
    textInputStyle: { 
        width: '100%',
        borderBottomColor: 'black',
        borderWidth: 0.5,
        padding: 10 
   },
   textStyle: {
       color: 'white'
   },
   lebelStyle: {
        fontSize: 40,
        color: 'red',
        padding: 20
   },
   itemStyle: {
    backgroundColor: 'pink',
    padding: 10,
    marginVertical: 10,
   },
   titleStyle: {
    fontSize: 16
   },
   headerStyle: {
    fontSize: 18
   },
   pressStyle: {
       padding: 15,
       marginVertical: 10,
       fontSize: 20
   },
   value: {
    fontWeight: '600',
    padding: 4,
    marginBottom: 8,
    color:'black'
   },
   fadingContainer :{
    padding: 20,
    backgroundColor: "powderblue"
   },
   fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  },
  animatedContainer :{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lable :{
    padding: 20,
    ...Platform.select({
        ios:{
            color: PlatformColor('lable'),
            backgroundColor: PlatformColor('systemTealColor'),
        },
        android:{
            color: PlatformColor('?android:attr/textColor'),
            backgroundColor: PlatformColor('@android:color/holo_blue_bright'),
        },
        default:{
            color:'black '
        }
    })
  }
})

export default styles
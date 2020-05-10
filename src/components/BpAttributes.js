import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const BpAttributes = (props) => {
    const {mainAttribute, subAttribute } = props.data
        let [fontsLoaded] = useFonts({
          'DS-DIGIB': require('../../assets/fonts/DS-DIGIB.ttf'),
        });
     

     if (!fontsLoaded) {
        return <AppLoading />;
      }else{
        return (
            <View style={styles.container}>
                <View style={styles.coreAttrib}>
                    <Text style={styles.mainAttributeText}  >{mainAttribute}</Text>
                    <Text>{subAttribute}</Text>
                </View>
                <View style = {styles.inputBoxes} >
                    <TextInput 
                    style={styles.inputStyle} 
                    placeholder= "0 0 0" 
                    maxLength = {3} 
                    keyboardType={'numeric'} 
                    onChangeText= {(val) => {props.onChangeAttrib(mainAttribute, val)}} 
                    />
                </View>
            </View>
        )
      }
   
}


const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center"
    },

    coreAttrib:{
        alignItems: "flex-end",
        width: "40%",
        marginVertical: 10
    },
    mainAttributeText:{
        fontSize: 25,
        textAlign:"right"
    },
    inputBoxes:{
        alignContent: 'flex-end'
    },
    inputStyle:{
        width: 200,
        height: 40,
        marginLeft: 25,
        fontFamily: 'DS-DIGIB',
        fontSize: 40
    },
    
})
export default BpAttributes

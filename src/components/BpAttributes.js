import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


const BpAttributes = ({mainAttribute, subAttribute}) => {
    const [sys, setSys]            = useState(0)
    const [dia, setDia]            = useState(0)
    const [heartRate, setHertRate] = useState(0)
    const [result, setResult]      = useState('')

 
    const checkResult = () => {
        const systolic  = parseInt(sys)
        const diastolic = parseInt(dia)
        const heartR    = parseInt(heartRate)
    
        if(systolic < 120 && diastolic < 80){
            setResult('normal')
        }
        if(systolic == 0 || diastolic ==0 || heartR ==0){
            setResult('noResult')
        }    
        if((systolic >= 120 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)){
            setResult('preHighblood')
        }
        if(systolic >= 140 || diastolic >=  100){
            setResult('HighBlood')
        }
    }

    let [fontsLoaded] = useFonts({
        'DS-DIGIB': require('../../assets/fonts/DS-DIGIB.ttf'),
    });



    if (!fontsLoaded) {
        return <AppLoading />;
    }else{
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    {result == '' &&
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/bp_img.png')}
                        />
                    }
                    {result == 'noResult' &&
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/bp_img.png')}
                        />
                        
                    }
                    {result == 'normal' &&
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/normal_result.png')}
                        />
                    }

                    {result == 'preHighblood' &&
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/lowblood_result.png')}
                        />
                    }

                    {result == 'HighBlood' &&
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/highblood_result.png')}
                        />
                }
                </View>
                <View style = {styles.subcontainer}>
                    <View style={styles.coreAttrib}>
                        <Text style={styles.mainAttributeText}  >SYS</Text>
                        <Text>mmHg</Text>
                    </View>
                    <View style = {styles.inputBoxes} >
                        <TextInput style={styles.inputStyle} placeholder= "0 0 0" maxLength = {3} keyboardType={'numeric'} 
                        onChangeText = {(newVal) => setSys(newVal)}
                        />
                    </View>
                </View>
                
                <View style = {styles.subcontainer}>
                    <View style={styles.coreAttrib}>
                        <Text style={styles.mainAttributeText}  >DIA</Text>
                        <Text>mmHg</Text>
                    </View>
                    <View style = {styles.inputBoxes} >
                        <TextInput style={styles.inputStyle} placeholder= "0 0 0" maxLength = {3} keyboardType={'numeric'} 
                            onChangeText = {(newVal) => setDia(newVal)}
                        />
                    </View>
                </View>
                <View style = {styles.subcontainer}>
                    <View style={styles.coreAttrib}>
                        <Text style={styles.mainAttributeText}  >PULSE</Text>
                        <Text>/min</Text>
                    </View>
                    <View style = {styles.inputBoxes} >
                        <TextInput style={styles.inputStyle} placeholder= "0 0 0" maxLength = {3} keyboardType={'numeric'} 
                        onChangeText = {(newVal) => setHertRate(newVal)}
                        />
                    </View>
                </View>
                <Button 
                    title={'Check Blood Pressure'}
                    onPress={checkResult}
                />
            </View>
        )
      }
   
}


const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center"  
    },
    subcontainer:{
        flexDirection: "row",
        alignItems: "center",
     
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
    tinyLogo: {
        width: 175,
        height: 150,
        
    }
    
})
export default BpAttributes


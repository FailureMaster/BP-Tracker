import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const BpResultTextAndIcon = ({bpResult}) => {
    let [fontsLoaded] = useFonts({
        'Code-Bold': require('../../assets/fonts/Code-Bold.otf'),
    });
     

    if (!fontsLoaded) {
        return <AppLoading />;
    }else{
     
        return (
            <View>
                {bpResult == '' &&
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/bp_img.png')}
                        />
                    </View>
                }
               
                {bpResult == 'normal' &&
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/normal_result.png')}
                        />
                        <Text style={styles.resultText}>NORMAL</Text>
                        <Text style={styles.resultTextBold}> BLOOD PRESSURE</Text>
                    </View>
                }

                {bpResult == 'lowBlood' &&
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/lowblood_result.png')}
                        />
                            <Text style={styles.resultText}>LOW</Text>
                            <Text style={styles.resultTextBold}> BLOOD PRESSURE</Text>
                    </View>
                }
                    

                {bpResult == 'preHighblood' &&
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/pre_highblood.png')}
                        />
                            <Text style={styles.resultText}>PRE-HIGH</Text>
                            <Text style={styles.resultTextBold}> BLOOD PRESSURE</Text>
                    </View>
                }

                {bpResult == 'HighBlood' &&
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/highblood_result.png')}
                        />
                            <Text style={styles.resultText}>HIGH</Text>
                            <Text style={styles.resultTextBold}> BLOOD PRESSURE</Text>
                    </View>
                }
                {bpResult == 'noResult' &&
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/img/bp_img.png')}
                        />
                    </View>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        marginTop: 50,
    },
    tinyLogo: {
        width: 175,
        height: 150,
        alignSelf: "center",
        marginBottom: 25
    },
    textStyle:{
        height: 40,
        marginLeft: 25,
        fontFamily: 'Code-Bold',
        fontSize: 25
    },
    resultText:{
        textAlign: "center",
        fontFamily: 'Code-Bold',
        fontSize: 25

    },
    resultTextBold:{
        textAlign: "center",
        fontFamily: 'Code-Bold',
        fontSize: 25,
        fontWeight: "bold"
    },
    resultContainer:{
        justifyContent: "center",
        
    }
})
export default BpResultTextAndIcon

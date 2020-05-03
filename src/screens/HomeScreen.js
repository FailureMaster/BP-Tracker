import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import BpAttribute from '../components/BpAttributes'

const HomeScreen = () => {
    return (
       <KeyboardAwareScrollView>
       
            <View>
                <View style={styles.container}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../assets/img/bp_img.png')}
                    />

                </View>
                <View style={styles.bpAttribute}>
                    <BpAttribute mainAttribute="SYS" subAttribute="mmHg"/>
                    <BpAttribute mainAttribute="DIA" subAttribute="mmHg"/>
                    <BpAttribute mainAttribute="PULSE" subAttribute="/min"/>
                    
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}


    
    const styles = StyleSheet.create({
        container:{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center"            
        },
        tinyLogo: {
            width: 175,
            height: 150,
            
        },bpAttribute:{
            padding: 50,
            marginTop: 20
        }
    })
export default HomeScreen

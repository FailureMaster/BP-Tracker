import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import BpAttribute from '../components/BpAttributes'

const HomeScreen = () => {
    const sysData   = {mainAttribute: "SYS", subAttribute:"mmHg", identifier: 111}
    const diaData   = {mainAttribute: "DIA", subAttribute:"mmHg", identifier: 222}
    const pulseData = {mainAttribute: "PULSE", subAttribute:"/min", identifier: 333}
        
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/img/bp_img.png')}
                />

            </View>
            <View style={styles.bpAttribute}>
                <BpAttribute data={sysData}/>
                <BpAttribute data={diaData}/>
                <BpAttribute data={pulseData}/>
            </View>
        </View>
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

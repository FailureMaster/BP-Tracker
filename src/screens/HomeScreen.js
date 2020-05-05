import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import BpAttribute from '../components/BpAttributes'

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.container}>

            </View>
            <View style={styles.bpAttribute}>
                <BpAttribute />
            </View>
        </View>
    )
}

    const styles = StyleSheet.create({
        container:{
            marginTop: 25,
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

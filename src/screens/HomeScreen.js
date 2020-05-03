import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const HomeScreen = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/img/bp_img.png')}
                />

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
        }
    })
export default HomeScreen

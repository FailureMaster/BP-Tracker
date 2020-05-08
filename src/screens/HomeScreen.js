import React, {useState, useEffect} from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import BpAttribute from '../components/BpAttributes'

const HomeScreen = () => {
    
    const [sys, setSys]       = useState(0)
    const [dia, setDia]       = useState(0)
    const [pulse, sestPulse]  = useState(0)
    const [result, setResult] = useState('')

    const setBpAttrib = (attrib, change) => {

        switch(attrib){
            case "SYS": 
                 attrib == "SYS" && setSys(change)
                break;
            case "DIA": 
                  attrib == "DIA" && setDia(change)
                break;
            case "PULSE": 
                 attrib == "PULSE" && sestPulse(change)
                break;
        }
    
    }//setBpAttrib function closing

    const checkResult = () => {
        const systolic  = parseInt(sys)
        const diastolic = parseInt(dia)
        const hpulse    = parseInt(pulse)
        

        if(systolic < 120 && diastolic < 80){
            setResult('normal')
        }
        if(systolic < 90 || diastolic < 60){
            setResult('lowBlood')
        }

        if(!systolic || !diastolic || !hpulse){
            setResult('noResult')
        }  
        
        if((systolic >= 120 && systolic <= 139) || (diastolic >= 80 && diastolic <= 89)){
            setResult('preHighblood')
        }
        if(systolic >= 140 || diastolic >=  100){
            setResult('HighBlood')
        }
        
    }// Check result function closing


    const sysData   = {mainAttribute: "SYS", subAttribute:"mmHg" }
    const diaData   = {mainAttribute: "DIA", subAttribute:"mmHg" }
    const pulseData = {mainAttribute: "PULSE", subAttribute:"/min" }
    
    
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/img/bp_img.png')}
                />

            </View>
            <View style={styles.bpAttribute}>
                <BpAttribute data={sysData}   onChangeAttrib = {setBpAttrib} />
                <BpAttribute data={diaData}   onChangeAttrib = {setBpAttrib} />
                <BpAttribute data={pulseData} onChangeAttrib = {setBpAttrib} />
            </View>
            <Button title="Check BP" onPress={() => checkResult()}/>
            <Text>{result}</Text>
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

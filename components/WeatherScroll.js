import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'
import FutureForecast from './FutureForecast'

const WeatherScroll = ({weatherData}) => {
    return (
        <View >
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
        </View>
    )
}

const CurrentTempEl = ({data}) => {

    if(data && data.weather){
        const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
        return(
            <View style={styles.tempContainer}>
                <Image source={img} style={styles.image} />
                <View  style={styles.otherContainer}>
                    <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text  style={styles.temp}>Night: {data.temp.night}&#176;C</Text>
                    <Text  style={styles.temp}>Day: {data.temp.day}&#176;C</Text>
                </View>
            </View>
        )
    }else{
        return( 
            <View>

            </View>

        )
        
    }
   
}

const styles = StyleSheet.create({
        image: {
            width:150,
            height:150,
        },
        tempContainer:{
            flexDirection:'row',
            backgroundColor: '#18181bdd',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            borderColor: '#fff',
            borderWidth:1.3,
            marginTop:-100,
            margin:20,
            padding:5,
        },
        day: {
            fontSize: 20,
            color: '#fff',
            backgroundColor: '#3c3c44',
            padding:10,
            textAlign:'center',
            borderRadius:50,
            fontWeight:'bold',
            marginBottom: 15,
        },
        temp: {
            fontSize:15,
            color: '#fff',
            fontWeight:'bold',
            textAlign:'center'
    
        },
        otherContainer: {
            paddingRight: 40,
        }
    
    });

export default WeatherScroll

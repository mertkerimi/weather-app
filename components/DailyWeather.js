import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'
const DailyWeather= ({weatherData}) => {
    if(weatherData && weatherData.length > 0){
        const img = {uri: 'http://openweathermap.org/img/wn/'+ weatherData[0].weather[0].icon +'@4x.png'}
        return(
            <View style={styles.tempContainer}>
                <Image source={img} style={styles.image} />
                <View  style={styles.otherContainer}>
                    <Text  style={styles.day}>{moment(weatherData[0].dt * 1000).format('dddd')}</Text>
                    <Text  style={styles.temp}>Day: {weatherData[0].temp.day}&#176;C</Text>
                    <Text  style={styles.temp}>Night: {weatherData[0].temp.night}&#176;C</Text>
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

export default DailyWeather

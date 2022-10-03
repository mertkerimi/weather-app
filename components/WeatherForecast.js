import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import moment from "moment-timezone";

const WeatherForecast = ({ weatherData }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={{ flexDirection: "row" }}>
        {weatherData && weatherData.length > 0 ? (
          weatherData.map(
            (weatherData, idx) =>
              idx !== 0 && (
                <WeatherForecastItem key={idx} forecastItem={weatherData} />
              )
          )
        ) : (
          <View />
        )}
      </View>
    </ScrollView>
  );
};

const WeatherForecastItem = ({ forecastItem }) => {
  const img = {
    uri:
      "http://openweathermap.org/img/wn/" +
      forecastItem.weather[0].icon +
      "@2x.png",
  };
  return (
    <View style={styles.weatherForecastItemContainer}>
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format("ddd")}
      </Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Day: {forecastItem.temp.day}&#176;C</Text>
      <Text style={styles.temp}>Night: {forecastItem.temp.night}&#176;C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#18181bdd",
    padding: 10,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  weatherForecastItemContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1.3,
    padding: 35,
    marginTop: 13,
    marginEnd: 18,
  },
  day: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#3c3c44",
    textAlign: "center",
    padding: 8,
    borderRadius: 50,
    fontWeight: "bold",
  },
  temp: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WeatherForecast;

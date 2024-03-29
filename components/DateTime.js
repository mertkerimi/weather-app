import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({ current, lat, lon, timezone }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.header}>WEATHER</Text>
        </View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subheading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            value={current ? current.humidity : ""}
            unit="%"
          />
          <WeatherItem
            title="Sunrise"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={
              current
                ? moment.tz(current.sunset * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="pm"
          />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.timezone}>Turkey</Text>
        <Text style={styles.latlong}>
          {lat}N {lon}E
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: `#b0c4de`,
    backgroundColor: "#3c3c44dd",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    marginLeft:130,
    fontWeight: "bold",
    marginTop: 30,
  },
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  heading: {
    fontSize: 45,
    color: "#fff",
    marginLeft: 10,
  },
  subheading: {
    fontSize: 30,
    color: "#fff",
    marginLeft: 10,
  },
  rightAlign: {
    textAlign: "right",
  },
  timezone: {
    fontSize: 20,
    color: "#fff",
    marginTop: 80,
    marginRight: 20,
  },
  latlong: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  weatherItemContainer: {
    backgroundColor: "#18181bdd",
    borderRadius: 10,
    borderWidth: 1.3,
    borderColor: "#fff",
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "#fff",
    fontSize: 14,
  },
});

export default DateTime;

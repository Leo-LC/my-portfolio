import { useEffect, useState } from "react";

const WeatherAPI = () => {
  const WEATHER_KEY = "b3c85319d689193e25ecf76c383015e7";
  const [weatherData, setWeatherData] = useState<any>({
    conditions: null,
    temp: null,
    icon: null,
  });

  const weatherIcons = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog",
  } as any;

  // api call = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  useEffect(() => {
    const currentWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Ko Samui&appid=${WEATHER_KEY}&units=metric`,
        );
        const data = await res.json();

        setWeatherData({
          conditions: data.weather[0].main,
          temp: Math.round(data.main.temp),
        });
      } catch (err) {
        console.log(err);
      }
    };
    currentWeather();
  }, []);

  return (
    <p>
      {weatherData.conditions} - {weatherData.temp}°C
    </p>
  );
};

export default WeatherAPI;

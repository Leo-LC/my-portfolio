const WeatherAPI = () => {
  const WEATHER_KEY = import.meta.env.OPENWEATHER_KEY;

  // api call = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const currentWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Ko Samui&appid=${WEATHER_KEY}`,
    );
    const data = await res.json();
    console.log(data);
  };


  currentWeather();

  return <h1 className="text-white">Weather API</h1>;
};

export default WeatherAPI;

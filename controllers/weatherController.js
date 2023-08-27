import axios from 'axios'

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

const fetchWeather = async (cities) => {
    const weatherData = {};
    const fetchWeatherForCity = async (city) => {
      try {
        console.log(city);
        console.log(WEATHER_API_KEY);
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`);
        const temperature = response.data.main.temp;
        weatherData[city] = `${temperature}°C`;
      } catch (error) {
        console.error(`Error fetching weather for ${city}: ${error.message}`);
        weatherData[city] = 'N/A';
      }
    };
    await Promise.all(cities.map(fetchWeatherForCity));
    return weatherData;
  };

export default fetchWeather;
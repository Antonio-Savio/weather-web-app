import axios from 'axios';

const APIkey = process.env.REACT_APP_API_KEY;

export const fetchWeatherData = async (city, units) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${APIkey}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};

export const fetchForecastData = async (lat, lon, units) => {
  const url_onecall = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&units=${units}&appid=${APIkey}`;
  const response = await axios.get(url_onecall);
  // console.log(response.data);
  return response.data;
};

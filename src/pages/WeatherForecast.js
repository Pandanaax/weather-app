import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getWeatherForecastByCityName } from '../api/WeatherApi';
import WeatherWithIcon from '../components/WeatherWithIcon';

const ForecastContainer = styled.div`
    background-color: rgb(255, 255, 255);
    clear: both;
    display: flex;
    font-size: 11px;
    border-radius: 0px 0px 5px 5px;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 23px -37px;
`;

const ForecastInfo = styled.p`
    color: rgb(119, 119, 119);
    font-size: 11px;
`;

const SeperateWeather = styled.div`
    border-left: 1px solid rgb(221, 221, 221);
    padding-left: 20px;
`;

const WeatherForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  const fetchWeatherForecast = async () => {
    try {
      const forecastData = await getWeatherForecastByCityName(city);
      setForecastData(forecastData);
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
    }
  };

  useEffect(() => {
    fetchWeatherForecast();
  }, [city]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  if (!forecastData) {
    return null; 
  }

  const currentDate = new Date();
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);

  const nextFourDays = [];
  const usedDates = new Set();

  forecastData.list.forEach((forecast) => {
    const forecastDate = new Date(forecast.dt * 1000);
    if (
      forecastDate >= tomorrow &&
      forecastDate <= new Date(tomorrow.getTime() + 3 * 24 * 60 * 60 * 1000) &&
      !usedDates.has(forecastDate.toLocaleDateString())
    ) {
      nextFourDays.push(forecast);
      usedDates.add(forecastDate.toLocaleDateString());
    }
  });

  return (
    <ForecastContainer>
      {nextFourDays.map((forecast) => (
        <SeperateWeather key={forecast.dt}>
          <div>
            <ForecastInfo style={{ fontWeight: 'bold' }}>{formatDate(forecast.dt)}</ForecastInfo>
            <WeatherWithIcon cityName={forecast.weather[0].main} isHome={false} iconColor="rgb(4,167,249)" />
            <ForecastInfo>{forecast.weather[0].description}</ForecastInfo>
            <ForecastInfo>{forecast.main.temp_min}/{forecast.main.temp_max}°C</ForecastInfo>
          </div>
        </SeperateWeather>
      ))}
    </ForecastContainer>
  );
};

export default WeatherForecast;

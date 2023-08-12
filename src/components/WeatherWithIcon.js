import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getWeatherByCityName, getWeatherForecastByCityName } from '../api/WeatherApi';

import CloudSunIcon from '../images/svg/cloud-sun';
import CloudIcon from '../images/svg/cloud';
import CloudRainIcon from '../images/svg/cloud-rain';
import CloudBoltIcon from '../images/svg/cloud-bolt';
import SmogIcon from '../images/svg/smog';
import SunIcon from '../images/svg/sun';
import SnowflakeIcon from '../images/svg/snowflake';
import WindIcon from '../images/svg/wind';
import BoltIcon from '../images/svg/bolt';
import CloudSunRainIcon from '../images/svg/cloud-sun-rain';

const WeatherWithIcon = ({ cityName, isHome, iconColor }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherForecastData, setWeatherForecastData] = useState(null);

  const WeatherContainer = styled.div`
    width: ${isHome ? '40%' : null};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${isHome ? 'rgba(0, 0, 0, 0.1)' : 'white'};
    padding: ${isHome ? '20px' : null};
    border-radius: 8px;
    color: ${isHome ? 'red' : 'white'};
  `;

  const SvgIcon = styled.div`
  svg {
    fill: ${iconColor};
  }
`;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeatherByCityName(cityName);
        const forecastData = await getWeatherForecastByCityName(cityName);
        setWeatherData(data);
        setWeatherForecastData(forecastData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeather();
  }, [cityName]);

  const weatherIcons = {
    'cloud sun': <CloudSunIcon />,
    'Rain': <CloudRainIcon />,
    'Right rain': <CloudRainIcon />,
    'Clouds': <CloudIcon />,
    'CloudBlot': <CloudBoltIcon />,
    'Mist': <SmogIcon />,
    'Clear': <SunIcon />,
    'Snow': <SnowflakeIcon />,
    'Wind': <WindIcon />,
    'Thunderstorm': <BoltIcon />,
    'CloudSunRain': <CloudSunRainIcon />,
  };

  const weatherCondition = weatherData?.weather[0]?.main || weatherForecastData?.weather[0]?.main;
  const weatherIcon = weatherIcons[weatherCondition];

  return (
    <WeatherContainer>
      <SvgIcon> {weatherIcon} </SvgIcon>
    </WeatherContainer>
  );
};

export default WeatherWithIcon;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; 

import { getWeatherByCityName } from '../api/WeatherApi';

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

const WeatherWithIcon = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState(null);

  const WeatherContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 8px;
`;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeatherByCityName(cityName);
        setWeatherData(data);
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
    'Sun': <SunIcon />,
    'Clear': <SunIcon />,
    'Snow': <SnowflakeIcon />,
    'Wind': <WindIcon />,
    'Thunderstorm': <BoltIcon />,
    'CloudSunRain': <CloudSunRainIcon />,
  };

  const weatherCondition = weatherData?.weather[0]?.main;
  console.log(weatherCondition);
  const weatherIcon = weatherIcons[weatherCondition];

  return (
    <WeatherContainer>
      {weatherIcon}
    </WeatherContainer>
  );
};

export default WeatherWithIcon;

import React, { useState, useEffect } from 'react';

import { getWeatherByCityName } from '../api/WeatherApi';
import ButtonWithLoading from '../components/buttons/ButtonWithLoading';
import Layout from '../components/Layout'; 
import styled from 'styled-components'; 
import WeatherWithIcon from '../components/WeatherWithIcon';
import WeatherForecast from './WeatherForecast';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchParagraph = styled.p`
  font-family: verdana;
  font-size: 12px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const BlockWeather = styled.div`
  color: rgb(255, 255, 255);
  background: linear-gradient(to right bottom, rgb(1, 129, 194), rgb(4, 167, 249), rgb(75, 196, 247));
  border-radius: 5px 5px 0px 0px;
  width: 100%;
  height: 100%;
  display: flex;
`;

const InformationWeather = styled.div`
  display: block;
  width: 60%;
  padding: 25px;
  font-family: Helvetica, sans-serif;
  color: rgb(181, 222, 244) !important;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const TextSection = styled.div`
  width: 100%;
  height: 0px;
  margin: 10px 0px;
  opacity: 0.4;
  border-bottom: 1px solid rgb(255, 255, 255);
`;

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    setIsSearchClicked(true);
    try {
      const data = await getWeatherByCityName(selectedCity);
      const temperatureInCelsius = fahrenheitToCelsius(data.main.temp);
      data.main.temp = temperatureInCelsius;
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }

  const formatDate = (timestamp) => {
    const options = { weekday: 'short', day: 'numeric', month: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(timestamp * 1000));
  };

  useEffect(() => {
    if (selectedCity && isSearchClicked) {
      handleSearch();
    } else {
      setWeatherData(null);
      setIsSearchClicked(false);
    }
  }, [selectedCity, isSearchClicked]);

  return (
    <Layout>
        <SearchParagraph>Search City</SearchParagraph>
        <InputContainer>
          <SearchInput
            type="text"
            id="search-bar-input"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
          <ButtonWithLoading
            onClick={handleSearch}
            isLoading={isLoading}
            text="Search"
          />
        </InputContainer>
      {isSearchClicked && weatherData && (
        <BlockWeather>
          <InformationWeather>
          <h2>{weatherData.name}</h2>
          <p>{formatDate(weatherData.dt)}</p>
          <TextSection></TextSection>
          <SearchParagraph> Temperature: {weatherData.main.temp.toFixed(2)}°C</SearchParagraph>
          <SearchParagraph> {weatherData.weather[0].description}</SearchParagraph>
          <TextSection></TextSection>
          <SearchParagraph> Wind: {weatherData.wind.speed} Km/h</SearchParagraph>
          <SearchParagraph> Humidity: {weatherData.main.humidity} %</SearchParagraph>
          </InformationWeather>
          <WeatherWithIcon cityName={selectedCity} isHome={true} iconColor="white" />
        </BlockWeather>
      )}
      {isSearchClicked && weatherData && (
          <WeatherForecast city={selectedCity}/>
      )}
    </Layout>
  );
};

export default HomePage;
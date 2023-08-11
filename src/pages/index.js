import React, { useState, useEffect } from 'react';
import { getWeatherByCityName } from '../api/WeatherApi';
import ButtonWithLoading from '../components/buttons/ButtonWithLoading';
import Layout from '../components/Layout'; 
import styled from 'styled-components'; 

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchParagraph = styled.p`
  font-family: verdana;
  font-size: 20px;
  color: darkblue;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
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
    console.log(data)
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
        <div>
          <h2>{weatherData.name}</h2>
          <SearchParagraph> Temperature: {weatherData.main.temp.toFixed(2)}°C</SearchParagraph>
          <SearchParagraph> {weatherData.main.temp_min}/{weatherData.main.temp_max}C</SearchParagraph>
          <SearchParagraph> {weatherData.weather[0].description}</SearchParagraph>
          <SearchParagraph> Wind: {weatherData.wind.speed}</SearchParagraph>
          <SearchParagraph> Humidity: {weatherData.main.humidity}</SearchParagraph>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
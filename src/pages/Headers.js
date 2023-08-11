import React from 'react';
import styled from 'styled-components';
import weatherLogo from '../images/weather-logo.png';

const HeaderContainer = styled.header`
  background-color: #ADD8E6;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 10%;
  margin-left: 30%;
`;

const StyledHeading = styled.h1`
font-size: 24px;
font-weight: bold;
padding-left: 35%;
font-family: Verdana;
`;

const Headers = () => {
  return (
    <HeaderContainer>
      <StyledHeading> WeatherWonders </StyledHeading>
      <LogoImage src={weatherLogo} alt="Logo" />
    </HeaderContainer>
  );
};

export default Headers;

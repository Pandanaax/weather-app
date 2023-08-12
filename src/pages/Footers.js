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

const StyledHeading = styled.h1`
font-size: 14px;
font-weight: bold;
font-family: Verdana;
`;

const Headers = () => {
  return (
    <HeaderContainer>
      <StyledHeading> By Randa </StyledHeading>
    </HeaderContainer>
  );
};

export default Headers;

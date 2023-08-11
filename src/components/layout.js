import React from 'react';
import Headers from '../pages/Headers';
import Footers from '../pages/Footers';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Headers />
      <PageContainer>{children}</PageContainer>
      <Footers />
    </>
  );
};

export default Layout;
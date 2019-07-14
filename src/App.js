import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import StyledForm from './Form';

const AppWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <AppWrapper>
        <GlobalStyles />
        <StyledForm />
      </AppWrapper>
    </>
  );
};

export default App;

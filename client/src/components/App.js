import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Repos from './Repos';

import { daysSinceGithubCreated } from '../helpers/constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'javascript',
      time: daysSinceGithubCreated
    };
  }

  onLanguageChange = event => {
    event.preventDefault();
    this.setState({
      language: event.target.value
    });
  };

  onTimeChange = event => {
    event.preventDefault();
    this.setState({
      time: parseInt(event.target.value)
    });
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <StyledPage>
          <Header
            onLanguageChange={this.onLanguageChange}
            onTimeChange={this.onTimeChange}
            {...this.state}
          />
          <StyledInner>
            <Repos {...this.state} />
          </StyledInner>
        </StyledPage>
      </>
    );
  }
}

export default App;

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.5rem;
    line-height: 2;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

const StyledPage = styled.div`
  align-items: center;
  background: white;
  color: #393939;
  display: flex;
  flex-direction: column;
`;

const StyledInner = styled.div`
  padding: 2rem;
  max-width: 150rem;
  width: 100%;
`;

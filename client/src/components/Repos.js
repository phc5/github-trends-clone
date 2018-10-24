import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import Card from './Card';
import Loader from './Loader';

export default class Repos extends Component {
  render() {
    const { language, time } = this.props;

    return (
      <Query query={REPO_QUERY} variables={{ language, time }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader {...this.props} />;
          if (error) return `Error! ${error.message}`;
          return (
            <StyledCardContainer>
              {data.repos.map(repo => (
                <Card key={repo.full_name} {...repo} />
              ))}
            </StyledCardContainer>
          );
        }}
      </Query>
    );
  }
}

const REPO_QUERY = gql`
  query REPO_QUERY($language: String!, $time: Int) {
    repos(language: $language, time: $time) {
      name
      full_name
      description
      language
      stargazers_count
      forks
    }
  }
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(calc(30rem - 1.6rem), 1fr));
`;

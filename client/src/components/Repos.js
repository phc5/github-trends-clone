import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

export default class Repos extends Component {
  render() {
    const { language, time } = this.props;

    return (
      <Query query={REPO_QUERY} variables={{ language, time }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error! ${error.message}`;
          console.log(data);
          return <StyledCardContainer>{data.message}</StyledCardContainer>;
        }}
      </Query>
    );
  }
}

const REPO_QUERY = gql`
  query {
    message
  }
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(calc(30rem - 1.6rem), 1fr));
`;

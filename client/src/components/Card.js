import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
  return (
    <StyledCard
      href={`https://github.com/${props.full_name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledCardContent>
        <StyledHeader>{props.name}</StyledHeader>
        <StyledSubHeader>{props.full_name}</StyledSubHeader>
        <StyleDescription>{props.description}</StyleDescription>
      </StyledCardContent>

      <StyledStarForkContainer>
        <StyledStar>
          <span role="img" aria-label="Star">
            ⭐
          </span>
          {props.stargazers_count.toLocaleString()}
        </StyledStar>
        <StyledFork>
          <span role="img" aria-label="Fork">
            🍴
          </span>
          {props.forks.toLocaleString()}
        </StyledFork>
      </StyledStarForkContainer>
    </StyledCard>
  );
}

const StyledCard = styled.a`
  border: 1px solid rgba(158, 158, 158, 0.3);
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px -5px rgba(158, 158, 158, 1);
  color: #393939;
  padding: 2rem;
  position: relative;
  user-select: none;
  text-decoration: none;
  transition: 0.25s;

  :hover {
    box-shadow: 0px 5px 10px 1px rgba(158, 158, 158, 1);
  }
`;

const StyledCardContent = styled.div`
  margin-bottom: 4rem;
`;

const StyledHeader = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const StyledSubHeader = styled.p`
  color: #bdbdbd;
  font-size: 1.25rem;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const StyleDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.75rem;
  max-width: 100%;
`;

const StyledStarForkContainer = styled.div`
  bottom: 0;
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
  position: absolute;
  right: 0;
`;

const StyledStar = styled.span`
  background-color: #fff59d;
  padding: 0.25rem 1rem;
`;

const StyledFork = styled.span`
  background-color: #eeeeee;
  padding: 0.25rem 1rem;
`;

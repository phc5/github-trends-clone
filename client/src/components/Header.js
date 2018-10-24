import React from 'react';
import styled from 'styled-components';

import { getColor } from '../helpers/helpers';
import { languages, times } from '../helpers/constants';

export default function Header(props) {
  const { onLanguageChange, onTimeChange, language, time } = props;

  const color = getColor(language);

  return (
    <StyledNav theme={color}>
      <StyledGrid>
        <StyledHeaderForm>
          <StyledLabel>
            <StyledLabelSpan>Language</StyledLabelSpan>
            <StyledSelect onChange={onLanguageChange} defaultValue={language}>
              {Object.entries(languages).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </StyledSelect>
          </StyledLabel>

          <StyledLabel>
            <StyledLabelSpan>Time</StyledLabelSpan>
            <StyledSelect onChange={onTimeChange} defaultValue={time}>
              {Object.entries(times).map(([key, value]) => (
                <option key={key} value={value}>
                  {key}
                </option>
              ))}
            </StyledSelect>
          </StyledLabel>
        </StyledHeaderForm>
        <StyledHeaderLinks>
          <a
            href="http://localhost:8080/graphql"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '16px' }}
          >
            GraphQL API
          </a>
          <a
            href="https://www.github.com/phc5/github-trends-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </StyledHeaderLinks>
      </StyledGrid>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme};
  border-top: 1rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 150rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const StyledHeaderForm = styled.form`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 50% 50%;

  @media (max-width: 480px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledLabel = styled.label`
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    top: 50%;
    margin-top: -2px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 0.75rem solid transparent;
    border-right: 0.75rem solid transparent;
    border-top: 0.75rem solid white;
  }
`;

const StyledLabelSpan = styled.span`
  font-size: 1rem;
  left: 1rem;
  position: absolute;
  top: 0.2rem;
  user-select: none;
`;

const StyledSelect = styled.select`
  appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 0;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  outline: none;
  padding: 0.8rem;
  padding-top: 2rem;
  width: 100%;
`;

const StyledHeaderLinks = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    color: white;
  }
`;

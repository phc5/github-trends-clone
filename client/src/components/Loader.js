import React from 'react';
import styled from 'styled-components';

export default function Loader() {
  return (
    <StyledSpinner>
      <StyledCircleOne />
      <StyledCircleTwo />
    </StyledSpinner>
  );
}

const StyledCircleOne = styled.div``;

const StyledCircleTwo = styled.div`
  animation-delay: -1s;
`;

const StyledSpinner = styled.div`
  height: 3rem;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 3rem;

  ${StyledCircleOne}, ${StyledCircleTwo} {
    animation: scaleCircles 2s infinite ease-in-out;
    background-color: #2196f3;
    border-radius: 50%;
    height: 100%;
    left: 0;
    opacity: 0.75;
    position: absolute;
    top: 0;
    width: 100%;
  }

  ${StyledCircleTwo} {
    animation-delay: -1s;
  }

  @keyframes scaleCircles {
    0%,
    100% {
      transform: scale(2);
    }
    50% {
      transform: scale(0);
    }
  }
`;

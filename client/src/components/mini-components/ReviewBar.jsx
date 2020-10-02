import React from 'react';
import styled from 'styled-components';

const Dot = styled.div`
  background-color: white;
  margin-top: 0.125rem;
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 100%;
  z-index: 1;
`;

const PercentBar = styled.div`
  left: 0;
  width: ${(props) => props.rating / 5 * 100}%;
  height: 100%;
  background-color: black;
  position: absolute;
`;

const TotalBar = styled.div`
  display: flex;
  position: relative;
  margin: 0.25rem 0;
  height: 0.5rem;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  min-height: 0.25rem;
`;

const TheBarTest = styled.div`
  position: relative;
`;

const ReviewBar = (props) => {

  return (
      <TotalBar>
        <PercentBar rating={props.rating} ></PercentBar>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </TotalBar>


  );
};

export default ReviewBar;
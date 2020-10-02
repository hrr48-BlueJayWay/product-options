import React from 'react';
import styled from 'styled-components';

const FlexItem = styled.div`
  border: 1px solid #dfdfdf;
  flex: 0 0 100%;
  padding: 2rem 1rem;
  margin: 1rem 0;
  border-radius: 0.25rem;

  &:hover {
    border-color: #929292;
    cursor: pointer;
  }

  &:active {
    border-size: 2px;
    border-color: #0058a3
  }
`;

const VarianceDetailsEntry = (props) => {

  return (
      <FlexItem>Hello World</FlexItem>
  );
};

export default VarianceDetailsEntry;
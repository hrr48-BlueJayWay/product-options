import React from 'react';
import styled from 'styled-components';

const FlexItem = styled.div`
  border: 1px solid #dfdfdf;
  flex: 0 0 100%;
  padding: 1.5rem 1.5rem;
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

  const handleClick = () => {
    props.setCurrentOption(props.option)
    props.setSidebarClicked(false)
  }
  return (
      <FlexItem onClick={handleClick}>{props.option}</FlexItem>
  );
};

export default VarianceDetailsEntry;
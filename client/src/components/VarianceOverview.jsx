import React, { useState } from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  border-top: 1px solid #f5f5f5;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
  ${FlexContainer}:hover & {
    text-decoration: underline;
  }
`;

const SelectedOption = styled.div`
  margin-top: 0.5rem;
  color: #484848;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 1.5rem;
  height: 1.5rem;
`;

const Arrow =
  <Icon viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.5996 11.9999L9.81456 17.7857L8.40026 16.3716L12.7714 11.9999L8.40026 7.62823L9.81457 6.21411L15.5996 11.9999Z"></path>
  </Icon>;

const VarianceOverview = (props) => {
  console.log(props);
  const [currentOption, setCurrentOption] = useState(props.options[0])

  return (
    <FlexContainer>
      <div>
        <Title>Color</Title>
        <SelectedOption>{currentOption}</SelectedOption>
      </div>
      {Arrow}
    </FlexContainer>
  );
};

export default VarianceOverview;
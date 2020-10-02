import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  border-top: 1px solid #f5f5f5;
  padding-top: 1.5rem;
  font-weight: 700;
  font-size: 0.9rem;
`;

const SelectedOption = styled.div`
  margin-top: 0.5rem;
  color: #484848;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const VarianceOverview = (props) => {
  console.log(props);
  const [currentOption, setCurrentOption] = useState(props.options[0])

  return (
    <div>
      <Title>Color</Title>
      <SelectedOption>{currentOption}</SelectedOption>
    </div>
  );
};

export default VarianceOverview;
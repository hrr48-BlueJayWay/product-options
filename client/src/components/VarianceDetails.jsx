import React from 'react';
import styled from 'styled-components';
import VarianceDetailsEntry from './VarianceDetailsEntry.jsx';
import { SidebarFlex, Title } from './mini-components/SidebarComponents.jsx';

const EntryFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


const VarianceDetails = (props) => {



  return (
    <SidebarFlex>
      <Title>{props.name}</Title>
        <EntryFlex>
          {props.varianceData && props.varianceData.map((option) => { return <VarianceDetailsEntry setSidebarClicked={props.setSidebarClicked} setCurrentOption={props.setCurrentOption} option={option} /> })}
        </EntryFlex>
    </SidebarFlex>
  );
};

export default VarianceDetails;
import React from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx'
import VarianceDetails from './VarianceDetails.jsx';

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 10rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Main = styled.div`
  position: absolute;
  right: 0;
  transform: translateX(${(props) => props.clicked ? "0" : "100%"});
  transition: all ease 300ms;
  width: 31.25rem;
  height: 100vh;
  background-color: #fff;
  z-index: 5;
  overflow: scroll;
`;

const Sidebar = (props) => {
  let varianceData = props.sidebarToRender.toLowerCase() + 's';
  const renderView = () => {
    if (props.sidebarToRender === 'reviews') {
      return <Reviews data={props.data} />
    } else {
      return <VarianceDetails setSidebarClicked={props.setSidebarClicked} setCurrentOption={props.setCurrentOption[varianceData]} varianceData={props.data[varianceData]} name={props.sidebarToRender} />;
    }
  }

  return (
    <Main clicked={props.sidebarClicked}>
      <Icon onClick={() => {props.setSidebarClicked(false);}} focusable="false" viewBox="0 0 24 24" class="range-revamp-svg-icon range-revamp-btn__icon" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 13.4144L16.9499 18.3642L18.3642 16.9499L13.4144 12.0002L18.3642 7.05044L16.95 5.63623L12.0002 10.586L7.05044 5.63623L5.63623 7.05044L10.586 12.0002L5.63624 16.9499L7.05046 18.3642L12.0002 13.4144Z"></path>
      </Icon>
        {renderView()}
    </Main>
  );
};

export default Sidebar;
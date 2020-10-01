import React from 'react';
import styled from 'styled-components';
import ReviewsOverview from './mini-components/ReviewsOverview.jsx'


const Main = styled.div`
  display: flex;
`;
const Reviews = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>HELLO MY DELICIOUS WORLD</h1>
      <ReviewsOverview data={data} />
    </div>
  );
};

export default Reviews;
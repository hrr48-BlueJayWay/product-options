import React from 'react';
import styled from 'styled-components';
import ReviewsOverview from './mini-components/ReviewsOverview.jsx'

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20%;
  padding-left: 10%;
`;

const Title = styled.h1`
grid-area: main;
font-weight: 700;
margin: 0.5rem 0;
flex: 0 0 100%;
font-size: 1.5rem;
`;

const Reviews = (props) => {
  const { data } = props;

  return (
    <FlexContainer>
      <Title>Reviews</Title>
      <div>
      <div></div>
      <ReviewsOverview averages={data.reviewsAverages} />
      </div>
    </FlexContainer>
  );
};

export default Reviews;
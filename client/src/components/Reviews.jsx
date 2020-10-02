import React from 'react';
import styled from 'styled-components';
import ReviewsOverview from './mini-components/ReviewsOverview.jsx'
import ReviewEntry from './ReviewEntry.jsx';
import ReviewBar from './mini-components/ReviewBar.jsx';



const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20%;
  margin-bottom: 10%;
  padding-left: 10%;
`;

const ReviewsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10%;
`;

const ScoreAverage = styled.div`
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(2, 1fr);
`;

const Title = styled.h1`
  font-weight: 700;
  margin: 0.5rem 0;
  flex: 0 0 100%;
  font-size: 1.5rem;
`;

const SubHeader = styled.h2`
  margin: 2.5rem 0;
  font-weight: 700;
  font-size: 0.75rem;
  color: #484848;
`;

const NumTitle = styled(Title)`
  margin-top: 2rem;
`;

const Averages = styled.div`

`;

const ScoreName = styled.h3`
  color: #484848;
  font-size: 0.75rem;
`;

const Score = styled.div`
  margin-left: 1rem;
  position: relative;
`;

const Rating = styled.div`
  position: absolute;
  right: -20%;
  top: 0;
  font-size: 0.75rem;
`;

const Reviews = (props) => {
  const { reviews, reviewsAverages } = props.data;
  console.log(reviewsAverages);
  return (
    <div>

    <FlexContainer>
      <Title>Reviews</Title>
      <Averages>
        <NumTitle>{reviewsAverages.overallRating}</NumTitle>
        <ReviewsOverview averages={reviewsAverages} />
        <SubHeader>Average customer ratings</SubHeader>
        <ScoreAverage>
          <ScoreName>Overall</ScoreName>
          <Score><ReviewsOverview averages={reviewsAverages} /></Score>
          <ScoreName>Ease of assembly/installation</ScoreName>
          <Score>
            <ReviewBar rating={reviewsAverages.easeOfAssembly} />
            <Rating>{reviewsAverages.easeOfAssembly}</Rating>
          </Score>
          <ScoreName>Value for Money</ScoreName>
          <Score>
            <ReviewBar rating={reviewsAverages.valueForMoney} />
            <Rating>{reviewsAverages.valueForMoney}</Rating>
          </Score>
          <ScoreName>Product Quality</ScoreName>
          <Score>
            <ReviewBar rating={reviewsAverages.productQuality} />
            <Rating>{reviewsAverages.productQuality}</Rating>
          </Score>
          <ScoreName>Appearance</ScoreName>
          <Score>
            <ReviewBar rating={reviewsAverages.appearance} />
            <Rating>{reviewsAverages.appearance}</Rating>
          </Score>
          <ScoreName>Works as expected</ScoreName>
          <Score>
            <ReviewBar rating={reviewsAverages.easeOfAssembly} />
            <Rating>{reviewsAverages.easeOfAssembly}</Rating>
          </Score>
        </ScoreAverage>
      </Averages>
    </FlexContainer>
    <ReviewsFlex>
      {reviews.map((review) => {return <ReviewEntry review={review} />})}
    </ReviewsFlex>
    </div>
  );
};

export default Reviews;
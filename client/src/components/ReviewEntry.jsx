import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Entry = styled.div`
  flex: 0 0 100%;
  padding-top: 2rem;
  margin-bottom: 2rem;
  border-top: 1px solid #f5f5f5;
  color: #484848;
  font-size: 0.9rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Body = styled.div`

`;

const Recommended = styled.div`
  margin: 1.5rem;
  font-size: 0.75rem;
`;

const Stars = styled.div`

`;

const Created = styled.div`
  font-size: 0.75rem;
  justify-self: end;
`;

const ReviewEntry = (props) => {
  const { review } = props;
  console.log(props);
  return (
    <Entry>
      <Header>
        <Stars>stars go here</Stars>
        <Created>{moment(review.createdAt).calendar()}</Created>
      </Header>
      <Title>{review.header}</Title>
      <Body>{review.body}</Body>
      <Recommended>Yes, I recommend this product</Recommended>
    </Entry>
  );
};

export default ReviewEntry;

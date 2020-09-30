import React from 'react';
import styled from 'styled-components';

const GridParent = styled.div`
  display: grid;
  grid-template-areas:
  "new-price new-price pricing"
  "main main pricing"
  "description description pricing"
  "reviews reviews pricing";
  text-align: center;
  align-items: center;
`;

const NewPrice = styled.div`
  grid-area: new-price;
  margin: 0.5rem 0;
`;

const Pricing = styled.div`
  grid-area: pricing;
`;


const Main = styled.div`
  grid-area: main;
`;

const Description = styled.div`
  grid-area: description;
`;

const Reviews = styled.div`
  grid-area: reviews;
`;

const ProductOverview = (props) => {
  const { data } = props;
  let isOnSale = data.price.salePrice < data.price.originalPrice

  return (
  <GridParent>
    {isOnSale && <NewPrice>New Lower Price</NewPrice>}
    <Main>
      <h1>{data.title}</h1>
    </Main>
    <Description>
      <p>{data.description}</p>
    </Description>
    <Pricing>
      <div>{data.price.originalPrice}</div>
      {isOnSale && <div>{data.price.salePrice}</div>}
    </Pricing>
    <Reviews>stars svg and review num here</Reviews>
  </GridParent>
  );
};

export default ProductOverview;
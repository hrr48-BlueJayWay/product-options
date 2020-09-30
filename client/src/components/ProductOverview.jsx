import React from 'react';
import styled from 'styled-components';

const detailsTheme = {
  main: "magenta",
}

const GridParent = styled.div`
  display: grid;
  grid-template-areas:
  "new-price new-price pricing"
  "main main pricing"
  "description description pricing"
  "reviews reviews pricing";
`;

const NewPrice = styled.div`
  grid-area: new-price;
  margin: 0.5rem 0;
  color: #ed022a;
  font-weight: 700;
  font-size: 0.75rem;
`;

const Pricing = styled.div`
  grid-area: pricing;
  align-self: start;
  margin-top: 1.75rem;
`;

const Main = styled.div`
  grid-area: main;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const Description = styled.div`
  grid-area: description;
  font-size: 0.75rem;
  margin: 0.5rem 0;
  color: #484848;
`;

const Reviews = styled.div`
  grid-area: reviews;
  margin: 0.5rem 0;
  font-size: 0.75rem;
  color: #484848;
`;

const CurrentPrice = styled.div`
  font-weight: 700;
  margin: 0.5rem 0;
  // to-do: add .00 and style
`;

const OriginalPrice = styled.div`
  font-size: 0.75rem;
  margin: 0.5rem 0;
  color: #484848;
  text-decoration: line-through;
`;

const MoneySpans = styled.span`
  font-size: 0.75rem;
  vertical-align: top;
`;




const ProductOverview = (props) => {
  const { data } = props;

  let isOnSale = data.price.salePrice < data.price.originalPrice

  const dollar = <MoneySpans>$</MoneySpans>
  const cents = <MoneySpans>.99</MoneySpans>
  return (
  <GridParent>
    {isOnSale && <NewPrice>New Lower Price</NewPrice>}
    <Main theme={detailsTheme}>
      <h1>{data.title.toUpperCase()}</h1>
    </Main>
    <Description>
      <p>{data.description}{data.colors[0] && `, ${data.colors[0]}`}{data.sizes[0] && `, ${data.sizes[0]}`}</p>
    </Description>
    <Pricing>
      <CurrentPrice>{dollar}{data.price.salePrice}{cents}</CurrentPrice>
      {isOnSale && <OriginalPrice>${data.price.originalPrice}.99</OriginalPrice>}
    </Pricing>
    <Reviews>stars svg and ({data.reviews.length})</Reviews>
  </GridParent>
  );
};

export default ProductOverview;
import React from 'react';

const ProductOverview = (props) => {
  const { data } = props;
  let isOnSale = data.price.salePrice < data.price.originalPrice

  <div>
    <div id="title">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
    <div id="price">
      <div>{data.price.originalPrice}</div>
      {isOnSale && <div>{data.price.salePrice}</div>}
    </div>
    <div id="reviews-module">stars svg and review num here</div>
  </div>
};

export default ProductOverview;
import React from 'react';

const ProductOverview = (props) => (
  <div>
    <div id="title">
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
    </div>
    <div id="price">
      <div>{props.data.price.originalPrice}</div>
      {props.data.price.salePrice < props.data.price.originalPrice && <div>{props.data.price.salePrice}</div>}
    </div>
    <div id="reviews-module">stars & # of reviews go here</div>
  </div>
);

export default ProductOverview;
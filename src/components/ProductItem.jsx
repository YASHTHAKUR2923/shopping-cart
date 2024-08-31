import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>{product.price}$</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;

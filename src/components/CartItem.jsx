import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.price}$</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;

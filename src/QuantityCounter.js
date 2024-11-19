import React, { useState } from 'react';

export default function QuantityCounter({ stock, saleprice }) {
  const [quantity, setQuantity] = useState(1);

  const increment = (e) => {
    e.preventDefault();
    if (quantity < stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrement = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = saleprice * quantity;

  return (
    <div className="quantity-counter d-flex align-items-center gap-3">
      <button
        className={`btn ${quantity === 1 ? 'disabled' : ''}`}
        onClick={decrement}
        disabled={quantity === 1}
        type="button"  // type="button"을 명시하여 submit되지 않도록 설정
      >
        -
      </button>

      <span className="quantity-display">{quantity}</span>

      <button
        className={`btn ${quantity === stock ? 'disabled' : ''}`}
        onClick={increment}
        disabled={quantity === stock}
        type="button"  // type="button"을 명시하여 submit되지 않도록 설정
      >
        +
      </button>

      <div className="total-price">
        {totalPrice.toLocaleString()} 원
      </div>
    </div>
  );
}

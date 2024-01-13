import React from 'react';
import './TotalPrice.css';

interface TotalPriceProps {
  totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
  return (
    <span className='text-end w-100 fw-bold totalPrice'>
      Total: {totalPrice} KGS
    </span>
  );
};

export default TotalPrice;

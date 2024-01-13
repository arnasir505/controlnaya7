import React from 'react'

interface TotalPriceProps {
  totalPrice: number
}

const TotalPrice: React.FC<TotalPriceProps> = ({totalPrice}) => {
  return (
    <span className='text-end w-100 fw-bold text-decoration-underline'>
      Total: {totalPrice} KGS
    </span>
  );
}

export default TotalPrice
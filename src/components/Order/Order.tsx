import React from 'react';
import TotalPrice from '../TotalPrice/TotalPrice';

interface OrderProps {
  orderItems: React.ReactNode[];
  totalPrice: number;
}

const Order: React.FC<OrderProps> = ({ orderItems, totalPrice }) => {
  return (
    <>
      {orderItems}
      <TotalPrice totalPrice={totalPrice} />
    </>
  );
};

export default Order;

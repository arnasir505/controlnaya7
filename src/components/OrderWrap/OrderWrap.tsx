import React from 'react';
import EmptyOrder from '../EmptyOrder/EmptyOrder';
import Order from '../Order/Order';
import { OrderItem } from '../../types';

interface OrderWrapProps {
  currentOrder: OrderItem[];
  orderItems: React.ReactNode[];
  totalPrice: number;
}

const OrderWrap: React.FC<OrderWrapProps> = ({
  currentOrder,
  orderItems,
  totalPrice,
}) => {
  return (
    <div className='orderWrap d-flex flex-column align-items-center gap-2'>
      <span className='border-text black'>Order details</span>
      {currentOrder.filter((order) => order.count > 0).length > 0 ? (
        <Order orderItems={orderItems} totalPrice={totalPrice} />
      ) : (
        <EmptyOrder />
      )}
    </div>
  );
};

export default OrderWrap;

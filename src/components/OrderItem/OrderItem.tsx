import React from 'react';
import { Menu } from '../../menuData';
import './OrderItem.css';

interface OrderItemProps {
  order: {
    id: number;
    name: string;
    count: number;
  };
  removeFromOrder: (id: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, removeFromOrder }) => {
  return (
    <div className='w-100 d-flex justify-content-end align-items-center'>
      <span className='me-auto'>{order.name}</span>
      <span className='me-2'>x{order.count}</span>
      <span className='fw-bold me-2'>
        {Menu.filter((item) => item.id === order.id)[0].price * order.count} KGS
      </span>
      <button
        className='btn btn-delete'
        onClick={() => removeFromOrder(order.id)}
      ></button>
    </div>
  );
};

export default OrderItem;

import React from 'react'
import { Menu } from '../../menuData';

interface OrderItemProps {
  order: {
    id: number;
    name: string;
    count: number;
  };
  removeFromOrder: (id: number) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({order, removeFromOrder}) => {
  return (
    <div className='fw-bold w-100 d-flex justify-content-end'>
      <span className='order_name me-auto'>{order.name}</span>
      <span className='order_count me-1'>x{order.count}</span>
      <span className='order_price'>
        {Menu.filter((item) => item.id === order.id)[0].price * order.count} KGS
      </span>
      <button className='btn' onClick={() => removeFromOrder(order.id)}>
        X
      </button>
    </div>
  );
}

export default OrderItem
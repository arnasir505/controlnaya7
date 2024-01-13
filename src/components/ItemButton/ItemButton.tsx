import React from 'react';
import { MenuItem } from '../../types';
import './ItemButton.css';

interface ItemButtonProps {
  item: MenuItem;
  addToOrder: (id: number) => void;
}

const ItemButton: React.FC<ItemButtonProps> = ({ item, addToOrder }) => {
  return (
    <button
      className='btn menuBtn d-flex gap-2'
      onClick={() => addToOrder(item.id)}
    >
      <img src={item.img} alt={item.name} className='menuBtn_img' />
      <div className='btn-text d-flex flex-column align-items-baseline'>
        <span className='h4'>{item.name}</span>
        <span>Price: {item.price} KGS</span>
      </div>
    </button>
  );
};

export default ItemButton;

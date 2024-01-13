import { useState } from 'react';
import './App.css';
import { Menu } from './menuData';
import './components/ItemButton/ItemButton.css';

function App() {
  const [currentOrder, setCurrentOrder] = useState([
    {
      id: 1,
      name: 'Hamburger',
      count: 0,
    },
    {
      id: 2,
      name: 'Hotdog',
      count: 0,
    },
    {
      id: 3,
      name: 'Burrito',
      count: 0,
    },
    {
      id: 4,
      name: 'Fries',
      count: 0,
    },
    {
      id: 5,
      name: 'Tea',
      count: 0,
    },
    {
      id: 6,
      name: 'Cola',
      count: 0,
    },
  ]);

  const addToOrder = (id: number) => {
    setCurrentOrder((prevState) => {
      return prevState.map((order) => {
        if (order.id === id) {
          return { ...order, count: order.count + 1 };
        } else {
          return order;
        }
      });
    });
  };

  const menuItems = Menu.map((item) => {
    return (
      <button
        className='btn menuBtn d-flex gap-2'
        key={item.id}
        onClick={() => addToOrder(item.id)}
      >
        <img src={item.img} alt={item.name} className='menuBtn_img' />
        <div className='btn-text d-flex flex-column align-items-baseline'>
          <span className='h4'>{item.name}</span>
          <span>Price: {item.price} KGS</span>
        </div>
      </button>
    );
  });

  const orderItems = currentOrder
    .filter((order) => order.count > 0)
    .map((order) => {
      return (
        <div key={order.id}>
          {order.name} {order.count}
        </div>
      );
    });
  return (
    <div className='container d-flex mt-5'>
      <div className='menuWrap d-flex w-50 flex-wrap justify-content-between gap-2'>
        {menuItems}
      </div>
      <div className='orderWrap'>
        {currentOrder.filter((order) => order.count > 0).length > 0
          ? orderItems
          : 'Empty'}
      </div>
    </div>
  );
}

export default App;

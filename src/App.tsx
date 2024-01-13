import { useState } from 'react';
import './App.css';
import { Menu } from './menuData';
import './components/ItemButton/ItemButton.css';
import EmptyOrder from './components/EmptyOrder/EmptyOrder';
import ItemButton from './components/ItemButton/ItemButton';
import OrderItem from './components/OrderItem/OrderItem';
import TotalPrice from './components/TotalPrice/TotalPrice';

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

  const removeFromOrder = (id: number) => {
    setCurrentOrder((prevState) => {
      return prevState.map((order) => {
        if (order.id === id) {
          return { ...order, count: 0 };
        } else {
          return order;
        }
      });
    });
  };

  const menuItems = Menu.map((item) => {
    return <ItemButton item={item} addToOrder={addToOrder} key={item.id} />;
  });

  const orderItems = currentOrder
    .filter((order) => order.count > 0)
    .map((order) => {
      return (
        <OrderItem
          order={order}
          removeFromOrder={removeFromOrder}
          key={order.id}
        />
      );
    });

  const totalPrice = Menu.reduce((acc, item, index) => {
    return acc + item.price * currentOrder[index].count;
  }, 0);

  const order = (
    <>
      {orderItems}
      <TotalPrice totalPrice={totalPrice} />
    </>
  );
  return (
    <div className='container d-flex mt-5'>
      <div className='menuWrap d-flex w-50 flex-wrap justify-content-between gap-2'>
        {menuItems}
      </div>
      <div className='orderWrap w-25 d-flex flex-column align-items-center gap-2'>
        {currentOrder.filter((order) => order.count > 0).length > 0 ? (
          order
        ) : (
          <EmptyOrder />
        )}
      </div>
    </div>
  );
}

export default App;

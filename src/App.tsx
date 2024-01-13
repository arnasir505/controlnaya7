import { useState } from 'react';
import './App.css';
import { Menu } from './menuData';
import './components/ItemButton/ItemButton.css';

function App() {
  const [currentOrder, setCurrentOrder] = useState([]);

  const addToOrder = () => {
    console.log('click');
  };

  const menuItems = Menu.map((item) => {
    return (
      <button
        className='btn menuBtn d-flex gap-2'
        key={item.id}
        onClick={addToOrder}
      >
        <img src={item.img} alt={item.name} className='menuBtn_img' />
        <div className='btn-text d-flex flex-column align-items-baseline'>
          <span className='h4'>{item.name}</span>
          <span>Price: {item.price} KGS</span>
        </div>
      </button>
    );
  });

  // const orderItems = currentOrder.map((item) => {
  //   return (
  //     <div>
  //       <span>{item.name}</span>
  //       <span>{item.count}</span>
  //     </div>
  //   );
  // });
  return (
    <div className='container d-flex mt-5'>
      <div className='menuWrap d-flex w-50 flex-wrap justify-content-between gap-2'>
        {menuItems}
      </div>
      <div className='orderWrap'>
        {/* {orderItems.length > 0 ? orderItems : 'Order is empty'} */}
      </div>
    </div>
  );
}

export default App;

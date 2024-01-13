import hamburgerImg from './assets/hamburger.jpg';
import hotdogImg from './assets/hotdog.png';
import burritoImg from './assets/burrito.png';
import friesImg from './assets/fries.jpg';
import teaImg from './assets/tea.jpg';
import colaImg from './assets/cola.jpg';
import { MenuItem } from './types';

export const Menu: MenuItem[] = [
  {
    id: 1,
    name: 'Hamburger',
    price: 160,
    img: hamburgerImg,
  },
  {
    id: 2,
    name: 'Hotdog',
    price: 140,
    img: hotdogImg,
  },
  {
    id: 3,
    name: 'Burrito',
    price: 180,
    img: burritoImg,
  },
  {
    id: 4,
    name: 'Fries',
    price: 100,
    img: friesImg,
  },
  {
    id: 5,
    name: 'Tea',
    price: 30,
    img: teaImg,
  },
  {
    id: 6,
    name: 'Cola',
    price: 50,
    img: colaImg,
  },
];

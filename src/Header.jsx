import { useContext } from 'react';

import logoImg from './assets/logo.jpg';
import Button from './components/UI/Button';
import CartContext from './store/CartContext';

export default function Header() {
  const cartCnt = useContext(CartContext);

  const totalCartItems = cartCnt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='A restaurant' />
        <h1>Smile Food</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

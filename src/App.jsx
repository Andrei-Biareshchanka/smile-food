import Header from './Header';
import Meals from './Meals';
import { CartContextProvider } from './store/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;

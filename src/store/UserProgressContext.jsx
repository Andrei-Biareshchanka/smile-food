import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout'
  showCart: () => {},
  hideCart: () => {},
  showCheckoutCart: () => {},
  hideCheckoutCart: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }

  function hideCart() {
    setUserProgress('');
  }

  function showCheckoutCart() {
    setUserProgress('checkout');
  }

  function hideCheckoutCart() {
    setUserProgress('');
  }

  const useProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckoutCart,
    hideCheckoutCart,
  };

  return (
    <UserProgressContext.Provider value={useProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;

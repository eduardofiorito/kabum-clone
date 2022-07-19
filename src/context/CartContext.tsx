import { createContext, ReactNode, useContext, useState } from 'react';

type CartContextProps = {
  quantityProducts: number;
  addProduct: (id: number, quantity: number) => void;
};

//Context
const CartContext = createContext({} as CartContextProps);
CartContext.displayName = 'Cart';

//useContext -> useCart
export function useCart() {
  return useContext(CartContext);
}

//Provider -> provides all values
type CartProviderProps = {
  children: ReactNode;
};

type ProductsProps = {
  id: number;
  quantity: number;
};

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const quantityProducts = products.reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  function addProduct(id: number, quantity: number) {
    setProducts((previousProduct) => [...previousProduct, { id, quantity }]);
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        quantityProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

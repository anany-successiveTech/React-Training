import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  productCount: 0,
  totalPrice: 0,
  addProduct: () => {},
  removeProduct: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const CountProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Add product or increase quantity if already in cart
  const addProduct = (product) => {
    const itemInCart = items.find((item) => item.id === product.id);
if(itemInCart) return;
    // console.log(product, "product");

    if (itemInCart) {
      increaseQuantity(product);
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
      setProductCount(productCount + 1);
      setTotalPrice(totalPrice + product.price);
    }
  };

  // Remove product completely from cart
  // This will fild(true/false) and filter
  const removeProduct = (id) => {
    const itemToRemove = items.find((item) => item.id === id);
    if (!itemToRemove) return;

    setItems(items.filter((item) => item.id !== id));
    setProductCount(productCount - itemToRemove.quantity);
    setTotalPrice(totalPrice - itemToRemove.price * itemToRemove.quantity); // Example 100 * 3 = 300
  };

  const increaseQuantity = (product) => {
    // console.log(items);

    setItems(
      items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    // console.log(productCount, 'increase');
    // console.log(product.id);

    setProductCount(productCount + 1);
    setTotalPrice(totalPrice + product.price);
  };

  const decreaseQuantity = (product) => {
    const item = items.find((item) => item.id === product.id);
    if (!item) return;

    // console.log(productCount,'decrease');

    if (item.quantity === 1) {
      removeProduct(product.id);
    } else {
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      setProductCount(productCount - 1);
      setTotalPrice(totalPrice - product.price);
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        productCount,
        totalPrice,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

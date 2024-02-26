import { createContext, useState } from "react";

type Cart = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}[];

type CartContext = {
  cart: Cart;
  changeQuantity: (productId: number, quantity: number) => void;
};

export const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>([
    {
      id: 1,
      name: "Product 1",
      price: 60,
      image:
        "/assets/100-days-challenge/day-14/bella-lac-LTyPTQ2tgNA-unsplash.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 25.99,
      image:
        "/assets/100-days-challenge/day-14/domino-164_6wVEHfI-unsplash.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
      image:
        "/assets/100-days-challenge/day-14/mediamodifier-t8HiP3e5abg-unsplash.jpg",
      quantity: 1,
    },
  ]);

  const changeQuantity = (productId: number, quantity: number) => {
    const newCart: Cart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: quantity };
      }
      return product;
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

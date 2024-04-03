import { usePathname } from "next/navigation";
import { createContext, useState } from "react";
import { getAssetsDir } from "../utils";

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
  const assetsDir = getAssetsDir(usePathname());

  const [cart, setCart] = useState<Cart>([
    {
      id: 1,
      name: "Product 1",
      price: 60,
      image: `${assetsDir}/product-1.jpg`,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 25.99,
      image: `${assetsDir}/product-2.jpg`,
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
      image: `${assetsDir}/product-3.jpg`,
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

"use client";
import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { CartContext, CartProvider } from "../context/CartContext";

const DayFourteen = () => {
  return (
    <CartProvider>
      <main className="flex min-h-screen items-center justify-center gap-4 bg-day-14 bg-cover py-8">
        <div className="flex gap-4 max-md:flex-col">
          <Cart />
          <div className="flex flex-col gap-4">
            <OrderSummary />
            <PromoCode />
          </div>
        </div>
      </main>
    </CartProvider>
  );
};

export default DayFourteen;

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <CardContainer>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Your Product List</h2>
        <span>{cart.length + " items"}</span>
      </div>
      <div className="flex max-h-[600px] w-[400px] flex-col gap-4 overflow-y-auto pr-4">
        {cart.map((product, i) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </CardContainer>
  );
};

const Product = ({
  id,
  image,
  name,
  price,
  quantity,
}: {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="aspect-square w-[120px] basis-1/3 overflow-hidden rounded-lg">
        <img className="h-full w-full object-cover" src={image} alt={name} />
      </div>
      <div className="flex basis-2/3 flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <button onClick={() => console.log("Removed!")}>
            <MdClose />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <Quantity productQuantity={quantity} productId={id} />
          <span className="font-semibold">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  const tax = subtotal * 0.15;
  const shipping = 0;
  const total = subtotal + tax;

  return (
    <CardContainer>
      <h2 className="text-lg font-bold">Order Summary</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="rounded-lg bg-black py-2 text-white duration-300 ease-in-out hover:scale-105">
        Pay now
      </button>
    </CardContainer>
  );
};

const PromoCode = () => {
  return (
    <CardContainer>
      <h2 className="text-lg font-bold">Promo Code</h2>
      <div className="rounded-lg border-2 p-1">
        <input
          className="px-2 py-1 text-sm outline-none"
          type="text"
          placeholder="Enter the promo code"
        />
      </div>
    </CardContainer>
  );
};

const Quantity = ({
  productQuantity,
  productId,
}: {
  productQuantity: number;
  productId: number;
}) => {
  const [quantity, setQuantity] = useState<number>(productQuantity);
  const { changeQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center gap-2">
      <button
        className="h-6 w-6 rounded-full bg-slate-100"
        onClick={() => {
          changeQuantity(productId, quantity - 1);
          setQuantity(quantity - 1);
        }}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="w-5 text-center">{quantity}</span>
      <button
        className="h-6 w-6 rounded-full bg-slate-100"
        onClick={() => {
          changeQuantity(productId, quantity + 1);
          setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
      {children}
    </div>
  );
};

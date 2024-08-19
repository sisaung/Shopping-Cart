import { useAppSelector } from "../../store/hooks";
import { Cart } from "../../store/slice/cartSlice";
import Button from "../ui/Button";

type CartProps = {
  cart: Cart;
};

const CartItems = ({ cart }: CartProps) => {
  const { products } = useAppSelector((state) => state.product);

  const currentProduct = products.find((p) => p.id === cart.productId);
  const cost = currentProduct!.price * cart.quantity;

  return (
    <>
      <div className="grid grid-col-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-5 border border-gray-300 rounded-lg p-5">
        <div className="col-span-1">
          <img src={currentProduct?.image} className="h-20" alt="" />
        </div>
        <div className=" col-span-3 md:col-span-2 lg:col-span-3 flex flex-col gap-2">
          <h1 className="font-medium">{currentProduct?.title}</h1>
          <p className="text-gray-400"> Price $ ( {currentProduct?.price} ) </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2 ">
          <p className="font-medium">Quantity</p>
          <div className="flex gap-3 items-center">
            <Button className="size-8 rounded-full flex justify-center items-center">
              <span> + </span>
            </Button>
            <p>{cart.quantity}</p>
            <Button className="size-8 rounded-full flex justify-center items-center">
              <span> - </span>
            </Button>
          </div>
        </div>
        <div className="col-span-1 mt-5 ">
          <p className="font-bold text-xl text-end"> $ {cost.toFixed(2)} </p>
        </div>
      </div>
    </>
  );
};

export default CartItems;

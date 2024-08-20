import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  Cart,
  removeCart,
  updateCartQuantity,
} from "../../store/slice/cartSlice";
import Button from "../ui/Button";

type CartProps = {
  cart: Cart;
};

const CartItems = ({ cart }: CartProps) => {
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const currentProduct = products.find((p) => p.id === cart.productId);
  const cost = currentProduct!.price * cart.quantity;

  const handleAddQuantity = () => {
    dispatch(updateCartQuantity({ id: cart.id, q: 1 }));
  };

  const handleReduceQuantity = () => {
    if (cart.quantity <= 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeCart({ id: cart.id }));
        }
      });
    } else {
      dispatch(updateCartQuantity({ id: cart.id, q: -1 }));
    }
  };

  return (
    <>
      <div className="grid gap-3 p-5 mt-5 border border-gray-300 rounded-lg grid-col-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div className="col-span-1">
          <img src={currentProduct?.image} className="h-20" alt="" />
        </div>
        <div className="flex flex-col col-span-3 gap-2 md:col-span-2 lg:col-span-3">
          <h1 className="font-medium">{currentProduct?.title}</h1>
          <p className="text-gray-400"> Price $ ( {currentProduct?.price} ) </p>
        </div>
        <div className="flex flex-col col-span-1 gap-2 ">
          <p className="font-medium">Quantity</p>
          <div className="flex items-center gap-3">
            <Button
              onClick={handleReduceQuantity}
              className="flex items-center justify-center rounded-full size-8"
            >
              <span> - </span>
            </Button>
            <p>{cart.quantity}</p>
            <Button
              onClick={handleAddQuantity}
              className="flex items-center justify-center rounded-full size-8"
            >
              <span> + </span>
            </Button>
          </div>
        </div>
        <div className="col-span-1 mt-5 ">
          <p className="text-xl font-bold text-end"> $ {cost.toFixed(2)} </p>
        </div>
      </div>
    </>
  );
};

export default CartItems;

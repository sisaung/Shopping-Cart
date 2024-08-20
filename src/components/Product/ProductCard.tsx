import { useNavigate } from "react-router-dom";
import { Product } from "../../store/slice/productSlice";
import Button from "../ui/Button";
import Rating from "./Rating";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { MouseEvent } from "react";
import { addCart } from "../../store/slice/cartSlice";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({
  product: {
    id,
    title,
    image,
    slug,
    price,
    rating: { rate },
  },
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const addedCart = cart.find((el) => el.productId === id);

  const handleNavigate = () => {
    navigate(`/productDetail/${slug}`);
  };

  const handleAddToCart = (event: MouseEvent) => {
    event.stopPropagation();

    if (!addedCart) {
      const newCart = {
        id: cart.length + 1,
        productId: id,
        quantity: 1,
      };

      dispatch(addCart({ newCart }));
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex flex-col items-start gap-5 p-5 border border-gray-300 rounded-lg cursor-pointer"
    >
      <img src={image} className="h-[120px] md:h-[150px]" />
      <h2 className="font-medium line-clamp-2"> {title} </h2>
      <Rating rate={rate} />
      <div className="flex items-center justify-between w-full">
        <p> $ {price} </p>
        <Button
          variant="outline"
          onClick={handleAddToCart}
          className={`py-1.5 text-sm ${
            addedCart ? "bg-cyan-400 text-white" : "text-gray-600 "
          }  hover:bg-cyan-500 hover:text-white`}
        >
          {addedCart ? "Added" : "Add Cart"}
        </Button>
      </div>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { Product } from "../../store/slice/productSlice";
import Button from "../ui/Button";
import Rating from "./Rating";

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

  const handleNavigate = () => {
    navigate(`/productDetail/${slug}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="p-5 cursor-pointer border border-gray-300 rounded-lg flex flex-col gap-5 items-start"
    >
      <img src={image} className="h-[120px] md:h-[150px]" />
      <h2 className="font-medium line-clamp-2"> {title} </h2>
      <Rating rate={rate} />
      <div className="flex justify-between items-center w-full">
        <p> $ {price} </p>
        <Button
          variant="outline"
          className="py-1.5 text-sm text-gray-600 hover:bg-cyan-500 hover:text-white "
        >
          Add Cart
        </Button>
      </div>
    </div>
  );
};

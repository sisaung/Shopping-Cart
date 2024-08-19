import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Category, toggleActive } from "../../store/slice/categorySlice";
import Button from "../ui/Button";

type CategoryProps = {
  category: Category;
};
const CategoryButton = ({
  category: { id, categoryName, isActive },
}: CategoryProps) => {
  const dispatch = useAppDispatch();

  const handleActiveBtn = () => {
    dispatch(toggleActive({ id }));
  };

  return (
    <Button
      variant="outline"
      onClick={handleActiveBtn}
      className={`${
        isActive ? "bg-cyan-600 text-white" : "text-gray-600"
      }  hover:text-white`}
    >
      {categoryName}
    </Button>
  );
};

export default CategoryButton;

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
    <Button onClick={handleActiveBtn} className={isActive ? "bg-cyan-600" : ""}>
      {categoryName}
    </Button>
  );
};

export default CategoryButton;

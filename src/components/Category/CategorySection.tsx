import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Container from "../layout/Container";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const { categories } = useAppSelector((state: RootState) => state.category);

  return (
    <section className="px-5 lg:p-0">
      <Container>
        <div className="flex items-center gap-3 overflow-x-scroll text-nowrap category-btn ">
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;

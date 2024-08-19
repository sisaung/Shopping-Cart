import { useAppSelector } from "../../store/hooks";
import Container from "../layout/Container";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const { categories } = useAppSelector((state) => state.category);

  return (
    <section className="px-5 lg:p-0">
      <Container>
        <div className="flex items-center gap-3 text-nowrap overflow-x-scroll category-btn ">
          {categories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;

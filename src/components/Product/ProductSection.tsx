import { useAppSelector } from "../../store/hooks";
import Container from "../layout/Container";
import { ProductCard } from "./ProductCard";

const ProductSection = () => {
  const { products } = useAppSelector((state) => state.product);
  const { categories } = useAppSelector((state) => state.category);

  const active = categories.find((category) => category.isActive === true);
  const filterProduct = products.filter(
    (product) =>
      active!.categoryName === "All" ||
      product.category === active!.categoryName
  );

  return (
    <section>
      <Container className="px-5 lg:p-0">
        <h1 className="mb-4 text-gray-500 text-md ">Available Products</h1>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filterProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;

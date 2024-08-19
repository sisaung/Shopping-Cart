import { useAppSelector } from "../../store/hooks";
import Container from "../layout/Container";
import { ProductCard } from "./ProductCard";

const ProductSection = () => {
  const { products } = useAppSelector((state) => state.product);

  return (
    <section className="px-5 lg:p-0">
      <Container>
        <h1 className="text-md text-gray-500 mb-4 ">Available Products</h1>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;

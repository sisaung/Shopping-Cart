import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Container from "../components/layout/Container";
import { useAppSelector } from "../store/hooks";
import Rating from "../components/Product/Rating";
import Button from "../components/ui/Button";

const ProductDetail = () => {
  const { productSlug } = useParams();

  const { products } = useAppSelector((state) => state.product);

  const currentProduct = products.find(
    (product) => product.slug === productSlug
  );

  return (
    <section>
      <Container className="px-5 mb-5 lg:p-0">
        <Breadcrumb currentBreadcrumb="Product Detail" />
        <div className="p-5 border border-gray-400 rounded-lg">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="col-span-1">
              <img
                src={currentProduct?.image}
                className="w-[150px] lg:w-[250px]  block  lg:mx-auto"
              />
            </div>
            <div className="flex flex-col items-start col-span-1 gap-5">
              <h1 className="text-lg font-bold">{currentProduct?.title}</h1>
              <p className="px-4 py-1 text-gray-500 bg-gray-200 rounded">
                {currentProduct?.category}
              </p>
              <p>{currentProduct?.description}</p>

              <div className="w-full mt-auto space-y-5">
                <Rating rate={currentProduct!.rating.rate} />
                <div className="flex items-center justify-between">
                  <p> $ {currentProduct?.price} </p>
                  <Button
                    variant="outline"
                    className="py-1.5 text-sm text-gray-600 hover:bg-cyan-500 hover:text-white "
                  >
                    Add Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;

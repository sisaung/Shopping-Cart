import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Container from "../components/layout/Container";
import { useAppSelector } from "../store/hooks";

const MyCart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  console.log(cart);

  return (
    <section>
      <Container className="px-5 lg:p-0">
        <Breadcrumb currentBreadcrumb="My Cart" />
      </Container>
    </section>
  );
};

export default MyCart;

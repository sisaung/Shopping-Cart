import Container from "../layout/Container";
import emptyCart from "../../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <Container className="flex flex-col items-center justify-center mx-auto">
      <img src={emptyCart} />
      <p className="font-medium text-gray-400"> Empty Cart </p>
    </Container>
  );
};

export default EmptyCart;

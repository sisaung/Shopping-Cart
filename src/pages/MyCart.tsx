import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import CartItems from "../components/Cart/CartItems";
import EmptyCart from "../components/EmptyCart/EmptyCart";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { useAppSelector } from "../store/hooks";

const MyCart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const { products } = useAppSelector((state) => state.product);

  const total: number = cart.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find((p) => p.id === cv.productId)!.price;

    return pv + cost;
  }, 0);

  const tax: number = total * 0.05;
  const netTotal: number = total + tax;

  return (
    <section>
      <Container className="px-5 lg:p-0">
        <Breadcrumb currentBreadcrumb="My Cart" />
        {cart.length === 0 ? <EmptyCart /> : null}
        {cart.map((cart) => (
          <CartItems key={cart!.id} cart={cart} />
        ))}
        <div className="flex flex-col h-[200px]">
          <div className="flex flex-col mt-auto">
            <div className="flex items-center justify-end py-5 border-t border-gray-300 gap-14">
              <div className="text-end">
                <p className="text-lg text-gray-500"> Total ($) </p>
                <p className="text-lg font-bold"> {total.toFixed(2)} </p>
              </div>
              <div className="text-end">
                <p className="text-lg text-gray-500">Tax (5%) </p>
                <p className="text-lg font-bold"> {tax.toFixed(2)} </p>
              </div>
              <div className="text-end">
                <p className="text-lg text-gray-500">Net Total ($) </p>
                <p className="text-2xl font-bold"> {netTotal.toFixed(2)} </p>
              </div>
            </div>
            <div className="mb-5 text-end">
              <Button>Order Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyCart;

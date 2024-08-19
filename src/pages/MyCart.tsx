import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import CartItems from "../components/Cart/CartItems";
import Container from "../components/layout/Container";
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

        {cart.map((cart) => (
          <CartItems key={cart!.id} cart={cart} />
        ))}
        <div className="flex flex-col h-[200px]">
          <div className="py-5 gap-14 border-t border-gray-300 mt-auto mb-5 flex justify-end items-center">
            <div className="text-end">
              <p className="text-gray-500 text-lg"> Total ($) </p>
              <p className="font-bold text-lg"> {total.toFixed(2)} </p>
            </div>
            <div className="text-end">
              <p className="text-gray-500 text-lg">Tax (5%) </p>
              <p className="font-bold text-lg"> {tax.toFixed(2)} </p>
            </div>
            <div className="text-end">
              <p className="text-gray-500 text-lg">Net Total ($) </p>
              <p className="font-bold text-2xl"> {netTotal.toFixed(2)} </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyCart;

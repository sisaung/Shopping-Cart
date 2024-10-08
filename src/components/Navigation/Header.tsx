import { Link, useNavigate } from "react-router-dom";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { useAppSelector } from "../../store/hooks";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cart);

  const handleCartBtn = () => {
    navigate("/myCart");
  };

  return (
    <header className="py-5 mb-5">
      <Container className="px-5 lg:p-0 ">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-2xl font-bold sm:text-3xl">
            {" "}
            Shopping Cart{" "}
          </Link>
          <Button
            onClick={handleCartBtn}
            className="relative flex items-center justify-center p-2 rounded-full sm:p-3 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span className="absolute inline-flex items-center justify-center translate-x-2/3 -translate-y-full sm:-translate-y-[90%] md:-translate-y-[80%] bg-red-400 text-xs sm:text-sm md:text-md px-1.5 md:size-5 lg:size-6 rounded-full">
              {cart.length}
            </span>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;

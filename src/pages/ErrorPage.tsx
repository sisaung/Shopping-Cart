import { Link } from "react-router-dom";
import notFound from "../assets/404-Error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <img src={notFound} className="h-[200px]" />
      <h1 className="text-2xl font-bold text-gray-400"> Not Found </h1>
      <Link
        to={"/"}
        className="group flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded shadow-lg cursor-pointer hover:bg-cyan-400 duration-300 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 stroke-gray-500 group-hover:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <p className="text-gray-500 group-hover:text-white">Go Home</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
